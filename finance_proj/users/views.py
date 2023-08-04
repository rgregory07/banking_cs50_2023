from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics, status, viewsets, serializers
from rest_framework.response import Response
from .models import *
from .serializers import *


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer



class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all() 
    serializer_class = UserSerializer


