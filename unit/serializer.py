from rest_framework import serializers
from .models import Unit
 

class UnitSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Unit
        fields = '__all__' 
        read_only_fields = ('id',)


