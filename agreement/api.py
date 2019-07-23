from rest_framework import viewsets, permissions
from .models import Agreement
from .serializer import AgreementSerializer

class AgreementViewset (viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    
    serializer_class = AgreementSerializer

    def get_queryset(self):
        return  Agreement.objects.all()
