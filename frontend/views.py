from django.shortcuts import render


def index(request):
    return render(request, "frontend/index.html")


def about(request):
    return render(request, "frontend/about.html")


def accounts(request):
    return render(request, "frontend/accounts.html")


def login(request):
    return render(request, "frontend/login.html")
