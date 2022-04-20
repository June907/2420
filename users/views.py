from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics, status
from users.models import User
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from django.contrib.auth import login, logout, authenticate
from .emailtokens import account_activation_token
from django.core.mail import EmailMessage
from .serializers import UserSerializer, RegisterSerializer, UpdateUserSerializer, UserSerializerWithEmail
from rest_framework import generics, permissions, status
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken
from django.middleware import csrf
from django.conf import settings
import json


class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):

        # user requests revalidation after original registration

        # if request.data.get('revalidation'):
        #     user = User.objects.filter(email=request.data.get('email'))
        #     if user[0] is not None:
        #         send_registration_email(user[0])
        #         return Response({'message': 'Resent verification email. Please make sure to check your spam folder.'}, status=status.HTTP_200_OK)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = None
        # if 'profile_picture' in request.FILES:
        # upload = Upload(
        #     upload=request.FILES['profile_picture'], user=serializer.validated_data['username'])
        # upload.save()
        # passing profile_picture to the serializer in the save() function adds profile_picture to validated_data
        # user = serializer.save(
        #     profile_picture=upload.upload.url)

        if user is None:
            user = serializer.save()

        # send_registration_email(user)

        return Response({'message': 'Account created. Please log in.'}, status=status.HTTP_201_CREATED)


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token)
    }


class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    # def options(self, request, format=None):
    #     response = Response()

    #     origin = "asdf"

    #     if request.headers.get('Origin') in settings.CORS_ALLOWED_ORIGINS:
    #         origin = request.headers.get('Origin')

    #     response['Access-Control-Allow-Origin'] = "asdf"
    #     response['Access-Control-Allow-Credentials'] = json.dumps(True)
    #     return response

    def post(self, request, format=None):
        user = authenticate(email=request.data.get(
            'email'), password=request.data.get('password'))
        response = Response()

        if user is not None:
            data = get_tokens_for_user(user)
            response.set_cookie(
                key=settings.SIMPLE_JWT['AUTH_COOKIE'],
                value=data["access"],
                expires=settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'],
                secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
                httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE']
            )
            response.set_cookie(
                key='refresh_token',
                value=data["refresh"],
                expires=settings.SIMPLE_JWT['REFRESH_TOKEN_LIFETIME'],
                secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
                httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE']
            )
            response.data = {'message': 'Login successful.', 'data': data}

            response.status = status.HTTP_200_OK

            return response
        return Response({'message': 'Invalid credentials.'}, status=status.HTTP_400_BAD_REQUEST)


class RefreshView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        try:
            refresh = RefreshToken(request.COOKIES.get('refresh_token'))
            access = str(refresh.access_token)
            response = Response()
            response.set_cookie(
                key=settings.SIMPLE_JWT['AUTH_COOKIE'],
                value=access,
                expires=settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'],
                secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
                httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE']
            )

            response.data = {'access': access}
            response.status = status.HTTP_200_OK
            return response

        except Exception:
            return Response({'message': 'Refresh token invalid.'}, status=status.HTTP_401_UNAUTHORIZED)


class LogoutView(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        try:
            refresh = request.COOKIES.get('refresh_token')
            outstanding_token = OutstandingToken.objects.filter(
                user=request.user, token=refresh)
            if len(outstanding_token) > 0:
                token = RefreshToken(refresh)
                token.blacklist()
                response = Response(
                    {'message': 'Logged out successfully.'}, status=status.HTTP_200_OK)
                response.delete_cookie(settings.SIMPLE_JWT['AUTH_COOKIE'])
                response.delete_cookie('refresh_token')
                return response
            return Response({'message': 'You can only invalidate your own tokens.'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            return Response({'message': 'Token invalid or none included.'}, status=status.HTTP_400_BAD_REQUEST)


class UpdateUser(generics.GenericAPIView):
    serializer_class = UpdateUserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def patch(self, request, format=None):

        # serializer can't handle being sent current username, so filter it out of data if identical by creating a copy dict

        # furthermore, avoid the taxing function of checking banned words list unless user is changing their name/username

        if 'username' in request.data:
            if request.data['username'] == request.user.username:
                request.data._mutable = True
                del request.data['username']
                request.data._mutable = False

        if request.data.get('first_name') == request.user.first_name:
            request.data._mutable = True
            del request.data['first_name']
            request.data._mutable = False

        if request.data.get('last_name') == request.user.last_name:
            request.data._mutable = True
            del request.data['last_name']
            request.data._mutable = False

        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)

        # if 'profile_picture' in request.FILES:
        #     # upload image to s3 and set image to user model
        #     upload = Upload(
        #         upload=request.FILES['profile_picture'], user=request.user.username)
        #     upload.save()
        #     request.user.profile_picture = upload.upload.url
        if 'username' in serializer.validated_data:
            request.user.username = serializer.validated_data['username']
        if 'first_name' in serializer.validated_data:
            request.user.first_name = serializer.validated_data['first_name']
        if 'last_name' in serializer.validated_data:
            request.user.last_name = serializer.validated_data['last_name']

        request.user.save()
        return Response({'message': 'Saved user settings.', 'user': UserSerializer(request.user).data}, status=status.HTTP_200_OK)


class GetUserByIdentifier(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        if 'id' in request.data or 'username' in request.data:
            try:
                user = User.objects.filter(pk=request.data['id'])[0]
                return Response({'message': 'User received.', 'user': UserSerializer(user).data}, status=status.HTTP_200_OK)
            except IndexError:
                return Response({'message': "This user doesn't exist."}, status=status.HTTP_404_NOT_FOUND)
            except KeyError:
                try:
                    user = User.objects.filter(
                        username=request.data['username'])[0]
                    return Response({'message': 'User received.', 'user': UserSerializer(user).data}, status=status.HTTP_200_OK)
                except IndexError:
                    return Response({'message': "This user doesn't exist."}, status=status.HTTP_404_NOT_FOUND)

        return Response({"message": "Invalid data."}, status=status.HTTP_400_BAD_REQUEST)


class GetUser(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        return Response({'message': 'User received.', 'user': UserSerializer(request.user).data}, status=status.HTTP_200_OK)


class CheckUser(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        if request.user.id is not None:
            return Response({'message': 'User is authenticated', 'user': UserSerializer(request.user).data, 'authenticated': True}, status=status.HTTP_200_OK)
        return Response({'message': 'User is not authenticated', 'authenticated': False}, status=status.HTTP_200_OK)
