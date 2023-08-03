from django.db import models


class bankData(models.Model):
    account = models.CharField(max_length=50, blank=True, null=True)
    transaction_date = models.DateField(blank=True, null=True)
    description_1 = models.CharField(max_length=200, blank=True, null=True)
    description_2 = models.CharField(max_length=200, blank=True, null=True)
    amount = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    amount_us = models.DecimalField(max_digits=19, decimal_places=4, blank=True, null=True)
    notes = models.CharField(max_length=200, blank=True, null=True)
    category = models.CharField(max_length=50, blank=True, null=True)
    sub_category = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'bankapp_bankdata'