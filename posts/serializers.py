from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('user', 'title', 'content', 'tags', 'ticker', 'posted_at')

        def get_tags(self, obj):
            tags = []
            for tag in obj.tags:
                try:
                    tags.append(tag)
                except IndexError:
                    obj.tags.remove(tag)
                    obj.save()
            return tags