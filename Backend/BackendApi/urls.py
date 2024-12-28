from django.urls import path
from BackendApi.views import LoginView

urlpatterns = [
    path('register/', LoginView.as_view()),
]
