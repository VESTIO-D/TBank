from rest_framework.views import APIView
from .serializers import UserSerializers
from .models import User
from rest_framework.response import Response


# Create your views here.

class LoginView(APIView):
    def post(self, req):
        obj = UserSerializers(data=req.data)
        obj.is_valid(raise_exception=True)
        obj.save()
        return Response(obj.data)
