from rest_framework import routers
from .api import TransactionViewset

router = routers.DefaultRouter()
router.register('api/transaction', TransactionViewset, 'transaction')

urlpatterns = router.urls