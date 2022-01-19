from rest_framework.routers import SimpleRouter
from .views import ShowViewSet, TheatreViewSet

router = SimpleRouter()
router.register('show', ShowViewSet)
router.register('', TheatreViewSet)

urlpatterns = router.urls
