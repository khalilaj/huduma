from django.db import models 

from property.models import Property

class Unit(models.Model):
    property = models.ForeignKey(Property,  on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=30, blank=True, null=True)
    no_of_bed = models.IntegerField(blank=True, null=True)
    no_of_bathroom = models.IntegerField(blank=True, null=True)
    status = models.BooleanField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True,blank=True, null=True )
    updated_on = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    class Meta:
        verbose_name = ('unit')
        verbose_name_plural = ('units')

    def __str__(self):
        return "<Unit name={} no_of_beds={}>".format(self.name, self.no_of_bed)