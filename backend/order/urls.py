from rest_framework.routers import SimpleRouter
from .views import BookingViewSet

router = SimpleRouter()
router.register('', BookingViewSet)

urlpatterns = router.urls

