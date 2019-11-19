from django import forms
from .models import Producto, Cliente


class ProductoForm(forms.ModelForm):
    class Meta:
        model = Producto
        fields = ['nombre', 'descripcion','clasificacion','precio',]
        labels = {'nombre': 'Nombre', 'descripcion': 'Descripcion Producto', 'precio': 'Precio Producto','clasificacion':'Clasificación'}
        widgets = { 'nombre': forms.TextInput(attrs={'class': 'form-control'}), 
                    'descripcion': forms.TextInput(attrs={'class': 'form-control'}),
                    'clasificacion': forms.TextInput(attrs={'class': 'form-control'}),
                    'precio': forms.TextInput(attrs={'class': 'form-control'}),}


