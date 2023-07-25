from django.urls import path


from .views import UserView, UserList
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [

    #REACT VIEWS

    path('users/', UserList.as_view(), name="users")
   

]