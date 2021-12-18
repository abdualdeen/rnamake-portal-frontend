
from django.urls import path

from . import views

app_name = 'rnamake_portal'
urlpatterns = [
    path('home/', views.home, name='home'),
]
