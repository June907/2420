from django.db import models
from users.models import User
from django.contrib.postgres.fields import ArrayField


class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    title = models.CharField(null=False, max_length=255)
    content = models.TextField(null=False)
    tags = ArrayField(models.CharField(max_length=200), blank=True)
    ticker = models.CharField(max_length=5, blank=True)
    posted = models.BooleanField(null=False, default=False)
    deleted = models.BooleanField(null=False, default=False)
    posted_at = models.DateTimeField(null=True)