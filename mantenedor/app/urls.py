from django.urls import path, include
from . import views

urlpatterns = [   
    path('', views.index),
    path('quienes', views.quienes),
    path('nba', views.nba),
    path('finalFantasy', views.finalFantasy),
    path('blairWitch', views.blairWitch),
    path('ingresarProducto', views.ingresarProducto),
    path('listarProductosFull', views.listarProductosFull),
    path('editarProducto/<int:producto_id>', views.editarProducto),
    path('borrarProducto/<int:producto_id>', views.borrarProducto),
      path('listarProductos', views.listarProductos),
]
