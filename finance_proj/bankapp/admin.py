from django.contrib import admin

# Register your models here.


from bankapp.models import bankData
@admin.register(bankData)
class ProductAdmin(admin.ModelAdmin):
    pass

