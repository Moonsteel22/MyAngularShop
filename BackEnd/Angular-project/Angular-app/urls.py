from django.urls import re_path
from . import views

urlpatterns=[
    re_path(r'products',views.products),
    re_path(r'authorization',views.authorization),
    re_path(r'registration', views.registration),
    re_path(r'addproduct',views.addproduct),
    re_path(r'deleteProduct',views.deleteproduct),
    re_path(r'cartProducts',views.cartProducts),
    re_path(r'addtocart',views.addtocart),
    re_path(r'deletefromcart',views.deletefromcart),
    re_path(r'',views.main),

]

