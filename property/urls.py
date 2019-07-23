from rest_framework import routers
from .api import PropertyViewset

router = routers.DefaultRouter()
router.register('api/property', PropertyViewset, 'property')

urlpatterns = router.urls