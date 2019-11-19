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
#@login_required
def ingresarProducto(request):
    if request.method == "Producto":
        form = ProductoForm(request.Producto)
        # files = request.FILES.getlist('albun')
        # print(files)
        if(form.is_valid):
            model_instance = form.save(commit=False)
            model_instance.save()
            return redirect('/ingresarProducto')
    else:
        form = ProductoForm()
        return render(request, 'app/ingresarProducto.html', {'form': form})
   
