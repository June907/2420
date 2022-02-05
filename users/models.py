from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    class Meta(AbstractUser.Meta):
        swappable = 'AUTH_USER_MODEL'

    email = models.EmailField(unique=True, max_length=50, blank=False)
    profile_picture = models.TextField(max_length=255, null=True)
    company = models.CharField(max_length=50, null=False, blank=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


class ExpiredToken(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=100, blank=False)
