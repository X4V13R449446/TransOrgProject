from django.core.validators import MinValueValidator
from django.db import models
from django.conf import settings


# Create your models here.
class Booking(models.Model):
    created_on = models.DateTimeField(auto_now_add=True)
    seat = models.IntegerField(default=1, null=False, validators=[MinValueValidator(1, 'Cannot book less than 1 seat.')])
    show = models.ForeignKey('theatre.Show', on_delete=models.CASCADE, null=False, related_name='bookings')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=False, on_delete=models.CASCADE, related_name='bookings')
