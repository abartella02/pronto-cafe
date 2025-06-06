"""
URL configuration for backend project.
"""

from django.contrib import admin
from django.urls import path, include
from api.views import FrontendAppView, index
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("api.urls")),  # /api/hours
    path("", index),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

admin.site.site_header = "Pronto Cafe Admin"
admin.site.site_title = "Pronto Cafe Admin Portal"
admin.site.index_title = ""
