from rest_framework import serializers
from .models import Post
from users.models import User


class PostSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    posted_at = serializers.SerializerMethodField()

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
