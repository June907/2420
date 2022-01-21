from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics, status
from users.models import User
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from django.contrib.auth import login, logout, authenticate
from .emailtokens import account_activation_token
from django.core.mail import EmailMessage
from .serializers import UserSerializer, RegisterSerializer, UpdateUserSerializer, UserSerializerWithEmail
from rest_framework import generics, permissions, status
from rest_framework.authtoken.models import Token


def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    data = {'success': False}

    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        data['success'] = True

    return render(request, 'users/activate.html', data)


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


class LoginView(APIView):
    permission_classes = (AllowAny)

    def post(self, request, format=None):
        email = request.data['email']
        user = None
        try:
            user_ = User.objects.filter(email=email)[0]
            user = authenticate(request=request, username=user_.username,
                                password=request.data['password'])
        except IndexError:
            return Response({'message': 'No user associated with that email address.'}, status=status.HTTP_404_NOT_FOUND)

        if user is None:
            return Response({'message': 'Could not log in with provided credentials.'}, status=status.HTTP_400_BAD_REQUEST)

        # deletes token if exists and recreates a new one

        token, created = Token.objects.get_or_create(user=user)
        if not created:
            token.delete()
            token, created = Token.objects.get_or_create(user=user)

        login(request, user)

        return Response({'message': 'Logged in successfully.', 'token': token.key, 'user': UserSerializerWithEmail(user).data})
