from rest_framework.authentication import TokenAuthentication
from django.utils import timezone


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
