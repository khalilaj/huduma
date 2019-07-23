from rest_framework import serializers
from .models import Agreement


class AgreementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agreement
        fields = '__all__'
        read_only_fields = ('id',)
