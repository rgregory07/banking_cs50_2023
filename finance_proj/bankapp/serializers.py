from rest_framework import serializers
from .models import bankData


class BankDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = bankData
        fields = ['id', 'account', 'transaction_date', 'description_1', 'description_2', 'amount', 'amount_us', 'notes', 'category', 'sub_category' ]

class PPDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = bankData
        fields = ['id', 'transaction_date', 'amount', 'category', 'sub_category' ]

class BankDataUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = bankData
        fields = ['id', 'transaction_date', 'amount', 'description_1' ]


