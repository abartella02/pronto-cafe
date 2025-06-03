from django.urls import path
from .views import BusinessHoursView, GelatoFlavoursView, GelatoSizesView

urlpatterns = [
    path('hours', BusinessHoursView),
    path('flavours', GelatoFlavoursView),
    path('sizes', GelatoSizesView)
]
