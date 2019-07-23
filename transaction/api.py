from rest_framework import viewsets, permissions
from .models import Transaction
from .serializer import TransactionSerializer

class TransactionViewset (viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    
    serializer_class = TransactionSerializer

    def get_queryset(self):
        return  Transaction.objects.all()
