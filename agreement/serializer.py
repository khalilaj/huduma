from rest_framework import serializers
from .models import Agreement 

from property.serializer import PropertySerializer
from unit.serializer import UnitSerializer
from tenant.serializer import TenantSerializer

class AgreementSerializer(serializers.ModelSerializer):  
    class Meta:
        model = Agreement
        fields = '__all__'
        read_only_fields = ('id',) ,

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['property'] = PropertySerializer(instance.property).data
        response['unit'] = UnitSerializer(instance.unit).data
        response['tenant'] = TenantSerializer(instance.tenant).data
        return response
