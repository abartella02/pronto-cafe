from django.contrib import admin
from .models import BusinessHour, GelatoFlavour, GelatoSize

admin.site.site_url = "https://prontocafegelato.com"  # or your actual site URL

admin.site.register(BusinessHour)
admin.site.register(GelatoFlavour)
admin.site.register(GelatoSize)
