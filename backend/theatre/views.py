from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from .serializers import TheatreSerializer, ShowSerializer
from .models import Theatre, Show


# Create your views here.
class TheatreViewSet(ModelViewSet):
    queryset = Theatre.objects.all()
    permission_classes = [IsAuthenticated, ]
    serializer_class = TheatreSerializer

    def filter_queryset(self, queryset):
        movie = self.request.query_params.get('movie')
        queryset = self.get_queryset()
        if movie:
            queryset = queryset.filter(movies=movie)
        return queryset


class ShowViewSet(ModelViewSet):
    queryset = Show.objects.all()
    permission_classes = [IsAuthenticated, ]
    serializer_class = ShowSerializer

    def filter_queryset(self, queryset):
        query_params = self.request.query_params
        movie = query_params.get('movie')
        theatre = query_params.get('theatre')
        queryset = self.get_queryset()
        if movie:
            queryset = queryset.filter(movie=movie)
        if theatre:
            queryset = queryset.filter(theatre=theatre)
        return queryset

