from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django import forms
# ---importamos nuestras estruras ---------------
from .models import Producto, Cliente
from .forms import ProductoForm
from django.contrib.auth.decorators import login_required

# Create your views here.


def cliente_list(request):
    return render(request, 'app/cliente_list.html', {})


def index(request):
    return render(request, 'app/index.html', {})


def quienes(request):
    return render(request, 'app/quienes.html', {})


def nba(request):
    return render(request, 'app/nba.html', {})


def finalFantasy(request):
    return render(request, 'app/finalFantasy.html', {})


def blairWitch(request):
    return render(request, 'app/blairWitch.html', {})

# ********************************
# @login_required


def ingresarProducto(request):
    if request.method == "POST":
        form = ProductoForm(request.POST)
        if(form.is_valid):
            model_instance = form.save(commit=False)
            model_instance.save()
            return redirect('/ingresarProducto')
    else:
        form = ProductoForm()
        return render(request, 'app/ingresarProducto.html', {'form': form})

def listarProductos(request):
    # creamos una variable que será colección y carga TODOS los registros
    producto = Producto.objects.all()
    # renderizamos la colección en el template: listar_carreras.html
    return render(request, "app/listarProductos.html",
                  {'producto': producto})

def listarProductosFull(request):
    producto = Producto.objects.all()
    return render(request, "app/listarProductosFull.html",
                  {'producto': producto})

def editarProducto(request, producto_id):
    # Recuperamos el objeto asociado al id
    instancia = Producto.objects.get(id=producto_id)
    # creamos un formulario que contenta los datos del registros recuperado
    form = ProductoForm(instance=instancia)

    #Comprobamos que sea enviado el formulario
    
    if request.method =="POST":
        form= ProductoForm(request.POST, instance= instancia)
        if form.is_valid():
            instancia = form.save(commit=False)
            instancia.save()
    return render(request, "app/editarProducto.html",{'form':form})
         
    
def borrarProducto(request, producto_id):
    instancia = Producto.objects.get(id=producto_id)
    instancia.delete()
    return redirect("/listarProductosFull")   #--> al raiz de las páginas