from django.urls import re_path
from . import views

urlpatterns=[
    re_path(r'products',views.products),
    re_path(r'registration', views.registration),
    re_path(r'',views.main)
]

