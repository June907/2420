from rest_framework import serializers
from .models import Like, Post
from users.models import User
from users.serializers import UserSerializer


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ('user',)


class PostSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    posted_at = serializers.SerializerMethodField()
    likes = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ('id', 'user', 'title', 'content',
                  'tags', 'posted_at', 'likes')

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
        return UserSerializer(obj.user).data

    def get_posted_at(self, obj):
        p = obj.posted_at
        hour = p.hour
        half = ' AM'
        if hour > 11:
            half = ' PM'
            if hour is not 12:
                hour = hour - 12
        if hour == 0:
            hour = 12

        h = str(hour)
        m = str(p.minute)

        if hour < 10:
            h = "0" + str(hour)

        if p.minute < 10:
            m = "0" + str(p.minute)

        return str(p.month) + '/' + str(p.day) + '/' + str(p.year) + ' @ ' + h + ":" + m + half

    def get_likes(self, obj):
        likes = Like.objects.filter(post=obj.id)
        arr = []
        for l in likes:
            arr.append(l.user.id)
        return arr
