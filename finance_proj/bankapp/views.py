from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from .models import bankData
from django.views.generic import ListView, CreateView, UpdateView
from django.urls import reverse_lazy
from django.shortcuts import render
from rest_framework import generics, status, viewsets, serializers
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import BankDataSerializer, PPDataSerializer, BankDataUploadSerializer
import json 


# used by the API get
class bankDataView(viewsets.ModelViewSet):
    queryset = bankData.objects.all()
    serializer_class = BankDataSerializer

# main view in AG-GRID
class bankDataList(generics.ListAPIView):
    queryset = bankData.objects.all() 
    serializer_class = BankDataSerializer

# saving changes back to the database
class bankDataRecordUpdate(generics.RetrieveUpdateAPIView):
    queryset = bankData.objects.all()
    serializer_class = BankDataSerializer

class bankDataDelete(generics.DestroyAPIView):
    queryset = bankData.objects.all()
    serializer_class = BankDataSerializer


# used by the API get for PP Bar Chart
class ppDataView(viewsets.ModelViewSet):
    queryset = bankData.objects.filter(category = 'Pebbles & Pine')
    serializer_class = PPDataSerializer

# used by the API get for PP Bar Chart
class ppDataList(generics.ListAPIView):
    queryset = bankData.objects.filter(category = 'Pebbles & Pine')
    serializer_class = PPDataSerializer

# saving upload to the database
class bankDataUpload(generics.RetrieveUpdateAPIView):
    queryset = bankData.objects.all()
    serializer_class = BankDataUploadSerializer