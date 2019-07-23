# Generated by Django 2.2.3 on 2019-07-23 11:18

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('property', '0003_property_completion_year'),
        ('tenant', '0001_initial'),
        ('unit', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100, null=True)),
                ('amount_due', models.CharField(blank=True, max_length=20, null=True, validators=[django.core.validators.RegexValidator(message="Amount must be entered in the format: '10000'. Up to 20 digits allowed.", regex='^\\+?1?\\d{1,20}$')])),
                ('amount_paid', models.CharField(blank=True, default=0, max_length=20, null=True, validators=[django.core.validators.RegexValidator(message="Amount must be entered in the format: '10000'. Up to 20 digits allowed.", regex='^\\+?1?\\d{1,20}$')])),
                ('transaction_type', models.CharField(blank=True, choices=[('RN', 'rent'), ('SC', 'service charge'), ('DP', 'deposit'), ('MT', 'maintenance')], max_length=20, null=True)),
                ('transaction_status', models.CharField(blank=True, choices=[('P', 'paid'), ('UN', 'unpaid')], max_length=20, null=True)),
                ('date_paid', models.CharField(blank=True, max_length=100, null=True)),
                ('date_due', models.DateField(blank=True, null=True)),
                ('payer', models.ForeignKey(blank=True, null=True, on_delete=None, to='tenant.Tenant')),
                ('property', models.ForeignKey(blank=True, default=None, on_delete=None, to='property.Property')),
                ('unit', models.ForeignKey(blank=True, default=None, on_delete=None, to='unit.Unit')),
            ],
            options={
                'verbose_name': 'transaction',
                'verbose_name_plural': 'transactions',
            },
        ),
    ]
