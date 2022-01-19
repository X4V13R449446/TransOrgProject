from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token

from .serializers import UserLoginSerializer, UserSerializer
from .models import User


class LoginView(APIView):
    permission_classes = AllowAny,

    def post(self, request, *args, **kwargs):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(True)
        user = serializer.save()
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user': UserSerializer(user).data
            }, status=status.HTTP_200_OK)
        raise AuthenticationFailed


class RegisterView(APIView):
    permission_classes = AllowAny,

    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(True)
        serializer.save()
        return Response({'message': 'Registration successful. Please login to continue.'},
                        status=status.HTTP_200_OK)


class LogoutView(APIView):
    permission_classes = IsAuthenticated,

    def post(self, request, *args, **kwargs):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)


class UserDetail(RetrieveAPIView):
    queryset = User.objects.none()
    serializer_class = UserSerializer
    permission_classes = IsAuthenticated,

    def get_object(self):
        return self.request.user
