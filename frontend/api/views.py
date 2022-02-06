from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics, status

class HelloWorldView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, format=None):
        return Response({'message': 'Hello World!'}, status=status.HTTP_200_OK)
