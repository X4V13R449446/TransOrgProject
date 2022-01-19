from rest_framework.routers import SimpleRouter
from .views import MovieViewSet

router = SimpleRouter()
router.register('', MovieViewSet)

urlpatterns = router.urls
