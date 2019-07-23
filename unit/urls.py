from rest_framework import routers
from .api import UnitViewset

router = routers.DefaultRouter()
router.register('api/unit', UnitViewset, 'unit')

urlpatterns = router.urls