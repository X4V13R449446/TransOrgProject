from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from .models import Booking


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Booking

    def validate_show(self, val):
        if val.total_available_seats <= 0:
            raise ValidationError({'show': 'Show must have at least 1 seat available.'})
        return val

    def validate(self, attrs):
        if attrs['show'].total_available_seats < attrs['seat']:
            raise ValidationError({'seat': 'Not enough seats available.'})
        return attrs

    def create(self, validated_data):
        instance = super().create(validated_data)
        show = instance.show
        show.total_available_seats -= instance.seat
        show.save()
        return instance
