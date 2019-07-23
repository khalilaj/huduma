from rest_framework import routers
from .api import TenantViewset

router = routers.DefaultRouter()
router.register('api/tenant', TenantViewset, 'tenant')

urlpatterns = router.urls