from rest_framework import serializers
from .models import BusinessHour


class BusinessHourSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessHour
        fields = ["day", "time"]
