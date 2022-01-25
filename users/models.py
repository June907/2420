from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    class Meta(AbstractUser.Meta):
        swappable = 'AUTH_USER_MODEL'

    profile_picture = models.TextField(max_length=255, null=True)
    company = models.CharField(max_length=50, null=True)
