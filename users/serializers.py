from typing import Type
from rest_framework import serializers
from rest_framework.authtoken.serializers import AuthTokenSerializer
from .models import User
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from twofortwenty.settings import BASE_DIR
import os
from rest_framework.response import Response


user_serializer_fields = ['id', 'username',
                          'first_name', 'last_name', 'created_at', 'profile_picture', 'is_subscribed']


def checkForInappropriateNames(username, first_name, last_name):
    name_lower = ""
    first_name_lower = ""
    last_name_lower = ""

    if username is not None:
        name_lower = username.lower()
    if first_name is not None:
        first_name_lower = first_name.lower()
    if last_name is not None:
        last_name_lower = last_name.lower()

    lines = []

    with open(os.path.join(BASE_DIR, 'users', 'banned_words.txt')) as f:
        lines = f.readlines()

    l = None

    for line in lines:
        line = line.strip()
        if line in name_lower:
            return serializers.ValidationError(
                "Please use an appropriate username.")
        if line in first_name_lower or line in last_name_lower:
            return serializers.ValidationError(
                "Please use an appropriate name.")

    return None


class UserSerializer(serializers.ModelSerializer):
    is_subscribed = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = user_serializer_fields


class UserSerializerWithEmail(UserSerializer):
    is_subscribed = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields_ = user_serializer_fields
        fields_.append('email')
        fields = fields_


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email',
                  'password', 'first_name', 'last_name')
        extra_kwargs = {'password': {'write_only': True}, "first_name": {
            'required': False}, "last_name": {'required': False}}

    def create(self, validated_data):
        if 'profile_picture' in validated_data:
            user = User.objects.create_user(
                validated_data['username'], validated_data['email'], validated_data['password'], first_name=validated_data['first_name'], last_name=validated_data['last_name'], is_active=False, total_songs_added=0, profile_picture=validated_data['profile_picture'])
            return user

        user = User.objects.create_user(
            validated_data['username'], validated_data['email'], validated_data['password'], first_name=validated_data['first_name'], last_name=validated_data['last_name'], is_active=False, total_songs_added=0)

        return user

    def validate(self, data):
        try:
            validate_email(data['email'])
        except ValidationError:
            raise serializers.ValidationError("Email invalid.")

        try:
            error = checkForInappropriateNames(
                data.get('username'), data.get('first_name'), data.get('last_name'))
            raise error
        except TypeError:
            return data


class UpdateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('password', 'username', 'first_name', 'last_name')
        extra_kwargs = {'password': {'write_only': True, 'required': False}, "username": {"required": False, "allow_null": False}, "first_name": {
            "required": False, "allow_null": False}, "last_name": {"required": False, "allow_null": False}}

    def validate(self, data):
        error = None
        try:
            error = checkForInappropriateNames(
                data.get('username'), data.get('first_name'), data.get('last_name'))
            raise error
        # if we're raising None
        except TypeError:
            # raise ValidationError(error)
            return data
