from django.urls import path


from .views import UserView
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [

    #REACT VIEWS

    path('users/', UserView.as_view(), name="users")
   

]