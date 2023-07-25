from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics, status, viewsets, serializers
from rest_framework.response import Response
from .models import *
from .serializers import *



# Create your views here.
class UserView(APIView):
     def get(self, request):
          output = [{"username": output.username}
                     for output in User.objects.all()]
          return Response(output)
     
#      def post(self, request):
#           serializer = UserSerializer(data=request.data)
#           if serializer.is_valid(raise_exception = True):
#                serializer.save()
#                return Response(serializer.data)

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserList(generics.ListAPIView):
    queryset = User.objects.all() 
    serializer_class = UserSerializer