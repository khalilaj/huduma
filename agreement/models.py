from django.db import models 
from django.core.validators import RegexValidator 

from property.models import Property
from tenant.models import Tenant
from unit.models import Unit


class Agreement(models.Model):
    tenant = models.ForeignKey(Tenant, on_delete=models.CASCADE, blank=True, null=True)
    unit = models.ForeignKey(Unit,  on_delete=models.CASCADE, blank=True, null=True)
    property = models.ForeignKey(Property,  on_delete=models.CASCADE, blank=True, null=True)
    tittle = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    amount_regex = RegexValidator(regex=r'^\+?1?\d{1,20}$',
                                  message="Amount must be entered in the format: '10000'. Up to 20 digits allowed.")
    deposit_amount = models.CharField(validators=[amount_regex], max_length=20, blank=True, null=True)
    rent_amount = models.CharField(validators=[amount_regex], max_length=20, blank=True, null=True)
    RENT_PAYMENT_TYPE = ( 
        ('MN', 'Months'), 
        ('YR', 'Years'),
    )
    day_to_pay_rent = models.IntegerField(blank=True, null=True)
    rent_payment_type = models.CharField(choices=RENT_PAYMENT_TYPE, blank=True, null=True, max_length=10)
    rent_start_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True,blank=True, null=True )
    updated_on = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    class Meta:
        verbose_name = ('agreement')
        verbose_name_plural = ('agreements')

    def __str__(self):
        return "<Agreement tittle={} tenant={} >".format (self.tittle, self.tenant)