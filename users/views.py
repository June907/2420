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

class LogoutView(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        try:
            refresh = request.data['refresh']
            outstanding_token = OutstandingToken.objects.filter(user=request.user, token=refresh)
            if len(outstanding_token) > 0:
                token = RefreshToken(refresh)
                token.blacklist()
                return Response({'message': 'Logged out successfully.'}, status=status.HTTP_200_OK)
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


class GetUserById(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        if 'id' in request.data:
            try:
                user = User.objects.filter(pk=request.data['id'])[0]
                return Response({'message': 'User received.', 'user': UserSerializer(user).data}, status=status.HTTP_200_OK)
            except IndexError:
                return Response({'message': "This user doesn't exist."}, status=status.HTTP_404_NOT_FOUND)
        return Response({"message": "Invalid data."}, status=status.HTTP_400_BAD_REQUEST)


class GetUser(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        return Response({'message': 'User received.', 'user': UserSerializer(request.user).data}, status=status.HTTP_200_OK)
