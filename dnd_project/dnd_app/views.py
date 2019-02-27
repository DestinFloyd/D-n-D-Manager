from django.shortcuts import render
# from django.http import JsonResponse
from django.http import HttpResponse
from rest_framework import viewsets
from .models import Weapon
from .models import User
from .models import Character
from .models import Spell
from .serializer import *
# Create your views here.

def helloIndex(req):
    return HttpResponse("ello!")  

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CharacterView(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer

class WeaponView(viewsets.ModelViewSet):
    queryset = Weapon.objects.all()
    serializer_class = WeaponSerializer

class SpellView(viewsets.ModelViewSet):
    queryset = Spell.objects.all()
    serializer_class = SpellSerializer


