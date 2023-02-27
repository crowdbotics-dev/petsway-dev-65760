from django.conf import settings
from django.db import models
class Pet(models.Model):
    'Generated Model'
    name = models.CharField(blank=True,max_length=50,)
    image = models.CharField(blank=True,max_length=50,)
    birth_date = models.DateField(null=True,blank=True,)
    notes = models.TextField(null=True,blank=True,)
