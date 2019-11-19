from django.urls import path, include
from . import views

urlpatterns = [   
    path('', views.index),
    path('quienes', views.quienes),
    path('nba', views.nba),
    path('finalFantasy', views.finalFantasy),
    path('blairWitch', views.blairWitch),
    path('ingresarProducto', views.ingresarProducto),
]
