from django.db import models

# Create your models here.
class Wine(models.Model):
    id = models.IntegerField(primary_key = 'true')
    country = models.CharField(max_length = 30)
    description = models.CharField(max_length = 500)
    designation = models.CharField(max_length = 100)
    points = models.IntegerField()
    price = models.IntegerField()
    province = models.CharField(max_length = 50)
    region_1 = models.CharField(max_length = 100)
    region_2 = models.CharField(max_length = 100)
    variety = models.CharField(max_length = 100)
    winery = models.CharField(max_length = 100)