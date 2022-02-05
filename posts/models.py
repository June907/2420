from django.db import models
from users.models import User


class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    title = models.CharField(null=False, max_length=255)
    content = models.TextField(null=False)
    # tags = ArrayField
    posted = models.BooleanField(null=False, default=False)
    deleted = models.BooleanField(null=False, default=False)
