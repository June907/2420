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
from .views import CreateView, DeleteView, UpdateView, ShowPostsByTicker


urlpatterns = [
    path('create', CreateView.as_view(), name='create-post'),
    path('delete', DeleteView.as_view(), name='delete-post'),
    path('update', UpdateView.as_view(), name='update-post'),
    path('show', ShowPostsByTicker.as_view(), name='show-ticker')
]