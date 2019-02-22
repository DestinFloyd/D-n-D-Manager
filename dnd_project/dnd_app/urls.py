from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('users', views.UserView)
router.register('characters', views.CharacterView)
router.register('weapons', views.WeaponView)


urlpatterns = [
    path('', include(router.urls)),
   
]
