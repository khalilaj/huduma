from rest_framework import serializers
from .models import Unit

from property.serializer import PropertySerializer
 

class UnitSerializer(serializers.ModelSerializer): 
   
    class Meta:
        model = Unit
        fields = '__all__' 
        read_only_fields = ('id',)

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['property'] = PropertySerializer(instance.property).data 
        return response


