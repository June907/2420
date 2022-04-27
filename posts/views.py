from ast import Or
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics, status
from .models import Post, Like
from users.models import User
from .serializers import PostSerializer, LikeSerializer
from datetime import datetime

post_limit = 10


class CreateView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        try:
            if request.user.company is None or request.user.company not in request.data['tags']:
                tags = request.data['tags']
                for i in range(len(tags)):
                    if tags[i] is not None:
                        tags[i] = tags[i].upper()
                post = Post(user=request.user,
                            title=request.data['title'], content=request.data['content'], tags=tags)
                if request.data.get('has_posted') == True:
                    post.posted = True
                    post.posted_at = datetime.now()
                    post.save()
                else:
                    post.save()
                posts = Post.objects.filter(posted=True, deleted=False)
                if len(posts) > post_limit:
                    posts = posts[len(posts)-post_limit:]
                posts = list(reversed(posts))
                serialized_posts = []
                for p in posts:
                    serialized_posts.append(PostSerializer(p).data)
                return Response({'message': 'Posted successfully.', 'posts': serialized_posts}, status=status.HTTP_201_CREATED)
            return Response({'message': "Users cannot post about the company they are affiliated with. If you believe this is a mistake, please contact administration."}, status=status.HTTP_400_BAD_REQUEST)
        except KeyError:
            return Response({'message': "Improperly configured request."}, status=status.HTTP_400_BAD_REQUEST)


class DeleteView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        try:
            post = Post.objects.filter(pk=request.data['post'])[0]
            if request.user == post.user:
                if not post.deleted:
                    post.deleted = True
                    post.posted = False
                    post.save()
                    return Response({'message': 'Post deleted successfully.'}, status=status.HTTP_200_OK)
                return Response({'message': "This post has already been deleted."}, status=status.HTTP_400_BAD_REQUEST)
            return Response({'message': "Users can only delete their own posts."}, status=status.HTTP_401_UNAUTHORIZED)
        except KeyError:
            return Response({'message': "Improperly configured request."}, status=status.HTTP_400_BAD_REQUEST)
        except IndexError:
            return Response({'message': "No post with provided ID."}, status=status.HTTP_400_BAD_REQUEST)


class UpdateView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        try:
            if request.user.company not in request.data['tags']:
                post = Post.objects.filter(pk=request.data['post'])[0]
                post.tags = request.data.get('tags')
                if 'title' in request.data:
                    post.title = request.data.get('title')
                if 'content' in request.data:
                    post.content = request.data.get('content')
                if request.data.get('has_posted') and not post.posted:
                    post.posted = True
                    post.save()
                    return Response({'message': 'Posted successfully.'}, status=status.HTTP_200_OK)
                post.save()
                return Response({'message': 'Post updated successfully.'}, status=status.HTTP_200_OK)
            return Response({'message': "Users cannot post about the company they are affiliated with. If you believe this is a mistake, please contact administration."}, status=status.HTTP_400_BAD_REQUEST)
        except KeyError:
            return Response({'message': "Improperly configured request."}, status=status.HTTP_400_BAD_REQUEST)
        except IndexError:
            return Response({'message': "No post with the provided ID."}, status=status.HTTP_400_BAD_REQUEST)


class ShowPostsByTag(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format=None):
        # take in ticker(s) and return most recent associated posts
        try:
            tags = request.data['tags']
            for i in range(len(tags)):
                if tags[i] is not None:
                    tags[i] = tags[i].upper()
            posts = Post.objects.filter(
                tags__contains=tags, posted=True, deleted=False)
            if len(posts) > post_limit:
                posts = posts[len(posts)-post_limit:]
            posts = list(reversed(posts))
            r = []
            if len(posts) > 0:
                counter = 0
                for p in posts:
                    if counter < post_limit:
                        r.append(PostSerializer(p).data)
                        counter = counter + 1
                    else:
                        break
            return Response({'message': "Posts generated successfully.", 'posts': r}, status=status.HTTP_200_OK)
        except KeyError:
            return Response({'message': "Improperly configured request. Please include a 'tags' value in the body."}, status=status.HTTP_400_BAD_REQUEST)


class ShowAllPosts(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format=None):
        # return all posts in chronological order
        posts = Post.objects.filter(posted=True, deleted=False)
        if len(posts) > post_limit:
            posts = posts[len(posts)-post_limit:]
        posts = list(reversed(posts))
        r = []
        if len(posts) > 0:
            counter = 0
            for p in posts:
                if counter < post_limit:
                    r.append(PostSerializer(p).data)
                    counter = counter + 1
                else:
                    break
        if len(r) > 0:
            return Response({'message': "Posts generated successfully.", 'posts': r}, status=status.HTTP_200_OK)
        return Response({'message': "No posts found."}, status=status.HTTP_200_OK)


class SendLike(APIView):
    permission_class = [IsAuthenticated]

    def post(self, request, format=None):
        try:
            post_id = request.data['post']
            post = Post.objects.get(id=post_id)

            if post is not None:
                like = Like.objects.filter(post=post.id, user=request.user.id)
                if len(like) == 0:
                    like = Like(user=request.user, post=post,
                                liked_at=datetime.now())
                    like.save()

                    return Response({'message': "Post liked."}, status=status.HTTP_201_CREATED)
                else:
                    like[0].delete()
                    return Response({'message': "Post unliked."}, status=status.HTTP_200_OK)
            return Response({'message': "No post found with the provided id."}, status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response({'message': "Improperly configured request. Please include a 'post' value in the body."}, status=status.HTTP_400_BAD_REQUEST)
