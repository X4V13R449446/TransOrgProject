from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .serializers import MovieSerializer, Movie


class MovieViewSet(ModelViewSet):
    queryset = Movie.objects.all()
    permission_classes = IsAuthenticated,
    serializer_class = MovieSerializer
