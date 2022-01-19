from django.contrib.auth import authenticate
from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = 'groups', 'user_permissions'
        read_only_fields = 'date_joined', 'is_staff', 'is_active'
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        instance = User.objects.create(**validated_data, is_active=True, is_staff=False)
        instance.set_password(validated_data['password'])
        instance.save()
        return instance

    def update(self, instance, validated_data):
        for key, val in validated_data.items():
            setattr(instance, key, val)
        if 'password' in validated_data:
            instance.set_password()
        instance.save()
        return instance


class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, allow_null=False, allow_blank=False)
    password = serializers.CharField(required=True, allow_null=False, allow_blank=False)

    class Meta:
        fields = 'email', 'password'
        model = User

    def create(self, validated_data):
        user = authenticate(**validated_data)
        if user:
            return user
        raise AuthenticationFailed
