import datetime
import jwt

from rest_framework.exceptions import ValidationError, AuthenticationFailed
from rest_framework.views import APIView
from .serializers import UserSerializers
from .models import User
from rest_framework.response import Response


# Create your views here.

class LoginView(APIView):
    def post(self, req):
        email = req.data.get('email')
        if User.objects.filter(email=req.data.get('email')).exists():
            raise ValidationError({"error": "User with this email already exists"})
        obj = UserSerializers(data=req.data)
        obj.is_valid(raise_exception=True)
        obj.save()
        return Response(obj.data)


class LoginApi(APIView):
    def post(self, req):
        email = req.data['email']
        password = req.data['password']
        x = User.objects.filter(email=email).first()

        if x is None:
            raise AuthenticationFailed("user not found..!")
        if not x.check_password(password):
            raise AuthenticationFailed("incorrect password..!")
        payload = {
            'id': x.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')
        response = Response()
        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }
        return response


class UserView(APIView):
    def get(self, req):
        token = req.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed('Unauthorised...!')
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthorised...!')
        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializers(user)
        return Response(serializer.data)
