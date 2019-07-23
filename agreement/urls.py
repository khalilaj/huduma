from rest_framework import routers
from .api import AgreementViewset

router = routers.DefaultRouter()
router.register('api/agreement', AgreementViewset, 'agreement')

urlpatterns = router.urls