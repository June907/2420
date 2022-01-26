from rest_framework_simplejwt import views as jwt_views
from rest_framework_simplejwt import serializers as jwt_serializers


class TokenSerializer(jwt_serializers.TokenObtainPairSerializer):
    username_field = 'email'


class TokenObtainPair(jwt_views.TokenObtainPairView):
    serializer_class = TokenSerializer
