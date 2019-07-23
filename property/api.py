from rest_framework import viewsets, permissions
from .models import Property
from .serializer import PropertySerializer

class PropertyViewset (viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    
    serializer_class = PropertySerializer

    def get_queryset(self):
        return  Property.objects.all()
