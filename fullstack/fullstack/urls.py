"""
URL configuration for fullstack project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from ignis.views import EventListCreate, EventDetail, home_view
from django.contrib.auth import views as auth_views
from ignis import views



router = DefaultRouter()
router.register(r'events', EventListCreate)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/events/', EventListCreate.as_view(), name='event-list-create'),
    path('events/', EventListCreate.as_view(), name='event-list'),
    path('api/events/<int:pk>/', EventDetail.as_view(), name='event-detail'),
    path('register/',views.register),   
    path('login/',views.login_page),
    path('logout/', auth_views.LogoutView.as_view(next_page='/login/'), name='logout'), 
    path('home/', views.home_view, name='home_page'),         

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT) 
urlpatterns+=staticfiles_urlpatterns()
