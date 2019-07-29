from rest_framework import serializers
from .models import Tenant  
from property.serializer import PropertySerializer
from unit.serializer import UnitSerializer 

class TenantSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Tenant
        fields = '__all__'
        read_only_fields = ('id',) 
        
    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['property'] = PropertySerializer(instance.property).data
        response['unit'] = UnitSerializer(instance.unit).data 
        return response