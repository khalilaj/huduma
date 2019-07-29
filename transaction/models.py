from django.db import models

from django.core.validators import RegexValidator 
from tenant.models import Tenant
from property.models import Property
from unit.models import Unit 


class Transaction(models.Model):
    property = models.ForeignKey(Property, on_delete=None, blank=True, null=True)
    unit = models.ForeignKey(Unit, on_delete=None, blank=True, null=True)
    tenant = models.ForeignKey(Tenant, on_delete=None, blank=True, null=True)

    name = models.CharField(max_length=100, blank=True, null=True)
    date_paid = models.DateField(blank=True, null=True) 
    amount_regex = RegexValidator(regex=r'^\+?1?\d{1,20}$',
                                  message="Amount must be entered in the format: '10000'. Up to 20 digits allowed.")
    amount_due = models.CharField(validators=[amount_regex], max_length=20, blank=True, null=True)
    amount_paid = models.CharField(validators=[amount_regex], max_length=20, blank=True, null=True, default=0)
    TRANSACTION_TYPE = (
        ('RN', 'rent'),
        ('SC', 'service charge'),
        ('DP', 'deposit'),
        ('MT', 'maintenance')
    )
    transaction_type = models.CharField(choices=TRANSACTION_TYPE, max_length=20, blank=True, null=True)

    TRANSACTION_STATUS = (
        ('P', 'paid'),
        ('UN', 'unpaid')
    )
    transaction_status = models.CharField(choices=TRANSACTION_STATUS, max_length=20, blank=True, null=True)
    date_paid = models.CharField(blank=True, null=True, max_length=100)
    date_due = models.DateField(blank=True, null=True)  

    class Meta:
        verbose_name = ('transaction')
        verbose_name_plural = ('transactions')

    def __str__(self):
        return "<Transaction name={} amount_paid={}>".format(self.name , self.amount_paid)


