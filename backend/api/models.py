from django.db import models


class BusinessHour(models.Model):
    day = models.CharField(max_length=20)
    time = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.day}: {self.time}"


class GelatoFlavour(models.Model):
    name = models.CharField(max_length=50)
    vegan = models.BooleanField()

    def __str__(self):
        return f"{self.name}{' (V)' if self.vegan else ''}"


class GelatoSize(models.Model):
    name = models.CharField(max_length=50)
    price = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.name} (${self.price})"
