from django.db import models 


class Property(models.Model):
    name = models.CharField(max_length=30,blank=False)
    location = models.CharField(max_length=50,blank=False)
    completion_year = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True,blank=True, null=True )
    updated_on = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    class Meta:
        verbose_name = ('property')
        verbose_name_plural = ('properties')

    def __str__(self):
        return "<Property name={} location={}>".format(self.name, self.location)





