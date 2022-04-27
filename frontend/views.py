from django.shortcuts import render, redirect


def index(request):
    return render(request, "frontend/index.html")


def index_id(request, username):
    return render(request, "frontend/index.html")


def index_re(request):
    return redirect('/aapl')
