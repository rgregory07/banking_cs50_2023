# Generated by Django 4.1.4 on 2023-05-29 01:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PcMastercard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(blank=True, max_length=200, null=True)),
                ('transaction_type', models.CharField(blank=True, max_length=50, null=True)),
                ('cardholder_name', models.CharField(blank=True, max_length=50, null=True)),
                ('transaction_date', models.DateField(blank=True, null=True)),
                ('transaction_time', models.TimeField(blank=True, null=True)),
                ('amount_can', models.DecimalField(blank=True, decimal_places=4, max_digits=19, null=True)),
                ('notes', models.CharField(blank=True, max_length=200, null=True)),
                ('category', models.CharField(blank=True, max_length=50, null=True)),
                ('sub_category', models.CharField(blank=True, max_length=50, null=True)),
            ],
            options={
                'db_table': 'pc_mastercard',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='PebblesBank',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(blank=True, max_length=200, null=True)),
                ('transaction_type', models.CharField(blank=True, max_length=50, null=True)),
                ('cardholder_name', models.CharField(blank=True, max_length=50, null=True)),
                ('transaction_date', models.DateField(blank=True, null=True)),
                ('transaction_time', models.TimeField(blank=True, null=True)),
                ('amount_can', models.DecimalField(blank=True, decimal_places=4, max_digits=19, null=True)),
                ('notes', models.CharField(blank=True, max_length=200, null=True)),
                ('category', models.CharField(blank=True, max_length=50, null=True)),
                ('sub_category', models.CharField(blank=True, max_length=50, null=True)),
            ],
            options={
                'db_table': 'pebbles_bank',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='PebblesCredit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(blank=True, max_length=200, null=True)),
                ('transaction_type', models.CharField(blank=True, max_length=50, null=True)),
                ('cardholder_name', models.CharField(blank=True, max_length=50, null=True)),
                ('transaction_date', models.DateField(blank=True, null=True)),
                ('transaction_time', models.TimeField(blank=True, null=True)),
                ('amount_can', models.DecimalField(blank=True, decimal_places=4, max_digits=19, null=True)),
                ('notes', models.CharField(blank=True, max_length=200, null=True)),
                ('category', models.CharField(blank=True, max_length=50, null=True)),
                ('sub_category', models.CharField(blank=True, max_length=50, null=True)),
            ],
            options={
                'db_table': 'pebbles_credit',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='RbcBank',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('account_type', models.CharField(blank=True, max_length=50, null=True)),
                ('account_number', models.CharField(blank=True, max_length=50, null=True)),
                ('transaction_date', models.DateField(blank=True, null=True)),
                ('cheque_number', models.CharField(blank=True, max_length=50, null=True)),
                ('description_1', models.CharField(blank=True, max_length=200, null=True)),
                ('description_2', models.CharField(blank=True, max_length=200, null=True)),
                ('amount_can', models.DecimalField(blank=True, decimal_places=4, max_digits=19, null=True)),
                ('amount_us', models.DecimalField(blank=True, decimal_places=4, max_digits=19, null=True)),
                ('notes', models.CharField(blank=True, max_length=200, null=True)),
                ('category', models.CharField(blank=True, max_length=50, null=True)),
                ('sub_category', models.CharField(blank=True, max_length=50, null=True)),
            ],
            options={
                'db_table': 'rbc_bank',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='RbcVisa',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('account_type', models.CharField(blank=True, max_length=50, null=True)),
                ('account_number', models.CharField(blank=True, max_length=50, null=True)),
                ('transaction_date', models.DateField(blank=True, null=True)),
                ('cheque_number', models.CharField(blank=True, max_length=50, null=True)),
                ('description_1', models.CharField(blank=True, max_length=200, null=True)),
                ('description_2', models.CharField(blank=True, max_length=200, null=True)),
                ('amount_can', models.DecimalField(blank=True, decimal_places=4, max_digits=19, null=True)),
                ('amount_us', models.DecimalField(blank=True, decimal_places=4, max_digits=19, null=True)),
                ('notes', models.CharField(blank=True, max_length=200, null=True)),
                ('category', models.CharField(blank=True, max_length=50, null=True)),
                ('sub_category', models.CharField(blank=True, max_length=50, null=True)),
            ],
            options={
                'db_table': 'rbc_visa',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='combinedData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('transaction_date', models.DateField(blank=True, null=True)),
                ('amount_can', models.DecimalField(blank=True, decimal_places=4, max_digits=19, null=True)),
                ('category', models.CharField(blank=True, max_length=50, null=True)),
                ('sub_category', models.CharField(blank=True, max_length=50, null=True)),
            ],
        ),
    ]
