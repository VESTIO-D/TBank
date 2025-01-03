from django.urls import path
from BackendApi.views import LoginView, LoginApi

urlpatterns = [
    path('register/', LoginView.as_view()),
    path('signin/', LoginApi.as_view()),
]
