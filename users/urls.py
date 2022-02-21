"""twofortwenty URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from .views import LogoutView, RegisterView, UpdateUser, LoginView, RefreshView, GetUser, GetUserByIdentifier
from .tokens import TokenObtainPair
from rest_framework_simplejwt import views as jwt_views


urlpatterns = [
    path('token', LoginView.as_view(),
         name='login'),
    path('token/refresh', RefreshView.as_view(), name='refresh'),
    path('register', RegisterView.as_view(), name='register'),
    path('logout', LogoutView.as_view(), name='logout'),
    path('update-user', UpdateUser.as_view(), name='update-user'),
    path('current', GetUser.as_view(), name='get-user'),
    path('get', GetUserByIdentifier.as_view(), name='get-user-by-id'),
]
