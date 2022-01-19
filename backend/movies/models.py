from django.db import models


# Create your models here.
from django.utils import timezone


class Movie(models.Model):
    name = models.CharField(max_length=150, null=False, blank=False, unique=True)
    release_date = models.DateTimeField(null=False, default=timezone.now)
    description = models.TextField(null=True)
    added_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = '-id',
