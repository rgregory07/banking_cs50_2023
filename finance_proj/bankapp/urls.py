from django.urls import path

from . import views
from .views import bankDataList, bankDataRecordUpdate, ppDataList, bankDataDelete
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [

    #REACT VIEWS

    path("bankdata/", bankDataList.as_view()),
    path("bankdata/<int:pk>/", bankDataList.as_view()),
    path("bankdata/update/<int:pk>/", bankDataRecordUpdate.as_view(), name="update-bankdata"),
    path("bankdata/delete/<int:pk>/", bankDataRecordUpdate.as_view(), name="delete-bankdata"),
    # path("bankdata/bulkupload/", bankDataDelete.as_view(), name="bulkupload-bankdata"),
    path("ppData/", ppDataList.as_view()),


   

]