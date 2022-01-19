from django.apps import apps
from django.utils import timezone
from rest_framework import serializers
from .models import Theatre, Show

Movies = apps.get_model('movies', 'Movie')


class TheatreSerializer(serializers.ModelSerializer):
    movies = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        fields = '__all__'
        model = Theatre


class ShowSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Show
