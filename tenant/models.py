
from django.core.validators import RegexValidator 

from django.db import models 
from property.models import Property
from unit.models import Unit

class Tenant(models.Model):
    firstname = models.CharField(max_length=30, blank=True, null=True)
    lastname = models.CharField(max_length=30, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    national_id_regex = RegexValidator(regex=r'^\+?1?\d{8,8}$',
                                       message="National id must be entered in the format: '33335501'. Up to 8 digits allowed ")
    national_id = models.CharField(validators=[national_id_regex], max_length=8, blank=True, null=True)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{10,10}$',
                                 message="Phone number must be entered in the format: '07123456789'. Up to 10 digits allowed.")
    phone_number = models.CharField(validators=[phone_regex], max_length=15, blank=True, null=True)
    dob = models.DateField(blank=True, null=True)
    property = models.ForeignKey(Property, on_delete=None, blank=True, null=True)
    unit = models.ForeignKey(Unit, on_delete=None, blank=True, null=True)

    class Meta:
        verbose_name = ('tenant')
        verbose_name_plural = ('tenants')

    def __str__(self):
        return "<Tenant firstname={} lastname={}>".format(self.firstname, self.lastname)
