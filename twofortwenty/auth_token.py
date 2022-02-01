from wsgiref.util import request_uri
from rest_framework import exceptions
from rest_framework.authentication import TokenAuthentication, CSRFCheck
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.exceptions import InvalidToken, AuthenticationFailed
from django.utils import timezone
from django.conf import settings
from rest_framework_simplejwt.settings import api_settings

# def enforce_csrf(request):
#     check = CSRFCheck(get_response=)
#     check.process_request(request)
#     reason = check.process_view(request, None, (), {})
#     if reason:
#         raise exceptions.PermissionDenied('CSRF Failed: %s' % reason)

class CookieAuthentication(JWTAuthentication):
    def authenticate(self, request):
        raw_token = request.COOKIES.get(settings.SIMPLE_JWT['AUTH_COOKIE']) or None

        if raw_token is None:
            return None

        validated_token = self.get_validated_token(raw_token)

        user = self.get_user(validated_token)
            
        # enforce_csrf(request)
        return user, validated_token

class BearerAuthentication(TokenAuthentication):
    keyword = "Bearer"

    def authenticate(self, request):
        try:
            auth = super().authenticate(request)
            if auth is not None:
                user = auth[0]
                token = auth[1]
                user.last_active = timezone.now()
                user.save()
                return (auth[0], auth[1])
            return None
        except IndexError:
            raise IndexError
