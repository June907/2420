from rest_framework import serializers
from .models import Post
from users.models import User


class PostSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ('user', 'title', 'content', 'tags', 'posted_at')

    def get_tags(self, obj):
        tags = []
        for tag in obj.tags:
            try:
                tags.append(tag)
            except IndexError:
                obj.tags.remove(tag)
                obj.save()
        return tags

    def get_user(self, obj):
        return obj.user.username
