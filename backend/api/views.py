from django.shortcuts import render
from django.http import JsonResponse
from django.views.generic import TemplateView
from .models import BusinessHour, GelatoFlavour, GelatoSize

class FrontendAppView(TemplateView):
    template_name = 'index.html'

def index(request):
    return render(request, 'index.html')

def BusinessHoursView(request):
    data = list(BusinessHour.objects.values())
    return JsonResponse(data, safe=False)

def GelatoFlavoursView(request):
    data = list(GelatoFlavour.objects.values())
    return JsonResponse(data, safe=False)

def GelatoSizesView(request):
    data = list(GelatoSize.objects.values().order_by('price'))
    return JsonResponse(data, safe=False)
