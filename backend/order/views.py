from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .serializers import BookingSerializer, Booking


class BookingViewSet(ModelViewSet):
    queryset = Booking.objects.all()
    permission_classes = IsAuthenticated,
    serializer_class = BookingSerializer

    def get_queryset(self):
        return self.request.user.bookings.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data={**request.data, 'user': request.user.pk})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
