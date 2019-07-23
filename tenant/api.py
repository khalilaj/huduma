from rest_framework import viewsets, permissions
from .models import Tenant
from .serializer import TenantSerializer

class TenantViewset (viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    
    serializer_class = TenantSerializer

    def get_queryset(self):
        return  Tenant.objects.all()
