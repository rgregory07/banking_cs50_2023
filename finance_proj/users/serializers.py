from rest_framework import serializers
from .models import User, UserAccountManager
from django.contrib.auth import get_user_model

User = get_user_model()




class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(
        min_length=6, write_only=True, required=True)

    class Meta:
        model = User
        fields = (
            'username', 'password')

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)



