from django import forms
from .models import Producto, Cliente


# class ProductoForm(forms.ModelForm):
#     class Meta:
#         model = Producto
#         fields = ['nombre', 'precio', 'imagen',
#                   'requerimientos', 'descripcion']
#         labels = {'nombre': 'Nombre', 'precio': 'Precio Producto', 'imagen': 'Imagen Producto',
#                   'requerimientos': 'Requerimiento Instalación', 'descripcion': 'Descripcion Producto', }
#         widgets = { 'nombre': forms.TextInput(attrs={'class': 'form-control'}), 
#                     'precio': forms.TextInput(attrs={'class': 'form-control'}), 
#                     'imagen': forms.FileInput(attrs={'class': 'form-control'}), 
#                     'requerimientos': forms.TextInput(attrs={'class': 'form-control'}), 
#                     'descripcion': forms.TextInput(attrs={'class': 'form-control'}), }

class ProductoForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(ProductoForm, self).__init__(*args, **kwargs)
        self.fields['imagen'].widget.attrs['multiple'] = True

    class Meta:
        model = Producto
        fields = '__all__'

