from django.db import models
from django.utils import timezone


class Theatre(models.Model):
    name = models.CharField(null=False, blank=False, max_length=50)
    address = models.TextField(null=False, blank=False)
    movies = models.ManyToManyField('movies.Movie', related_name='theatres', related_query_name='theatre', through='Show',
                                    through_fields=('theatre', 'movie'))


class Show(models.Model):
    movie = models.ForeignKey('movies.Movie', on_delete=models.CASCADE, related_name='shows', related_query_name='show')
    theatre = models.ForeignKey(Theatre, on_delete=models.CASCADE, related_name='shows', related_query_name='shows')
    date = models.DateTimeField(null=False, default=timezone.now)
    total_available_seats = models.IntegerField(default=20, null=False)
    end_time = models.TimeField(null=False)
