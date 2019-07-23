from rest_framework import viewsets, permissions
from .models import Unit
from .serializer import UnitSerializer

class UnitViewset (viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    
    serializer_class = UnitSerializer

    def get_queryset(self):
        return  Unit.objects.all()
