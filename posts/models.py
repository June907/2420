from django.db import models
from users.models import User
from django.contrib.postgres.fields import ArrayField


class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    title = models.CharField(null=False, max_length=255)
    content = models.TextField(null=False)
    tags = ArrayField(models.CharField(max_length=20), blank=True)
    posted = models.BooleanField(null=False, default=False)
    deleted = models.BooleanField(null=False, default=False)
    posted_at = models.DateTimeField(null=True)


class Like(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    liked_at = models.DateTimeField(null=True)
