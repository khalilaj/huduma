from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.views.static import serve
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')), 
    path('', include('accounts.urls')), 
    path('', include('property.urls')), 
    path('', include('unit.urls')), 
    path('', include('tenant.urls')),
    path('', include('agreement.urls')), 
    path('', include('transaction.urls')),      
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
