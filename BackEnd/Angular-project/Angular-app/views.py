from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import AppPhone
from .models import UserTable
from django.core import serializers
import json
# Create your views here.
def products(request):
    phones=json.loads(serializers.serialize('json',AppPhone.objects.all()))

    toClient=[]
    for i in phones:
        toClient.append({'pk': i['pk'], 'Producer': i['fields']['producer'], 'Display': i['fields']['display'],
         'Name': i['fields']['name'],
         'Description': i['fields']['description'], 'Amount': i['fields']['amount'],
         'Sum': i['fields']['amount'] * i['fields']['price'], 'Price': i['fields']['price'],
         'Image': i['fields']['imgurl']
         })
    return JsonResponse([{'data':toClient}],safe=False)

def registration(request):
    return HttpResponse('as')


def authorization(request):
    return HttpResponse('as')

def main(request):
    return HttpResponse("<h1>welcome to the server</h1>")