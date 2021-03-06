from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

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
@csrf_exempt
def registration(request):
    if(request.method == 'POST'):
        data=json.loads(request.body)
        print(data)

        if(UserTable.objects.filter(email=json.loads(request.body)['email'])):
            print("email exists")
            return JsonResponse([{'code':0,'message':'Пользователь с таким email зарегестрирован!'}],safe=False)
        if (UserTable.objects.filter(login=json.loads(request.body)['login'])):
            return JsonResponse([{'code': 0, 'message': 'Такой логин существует!'}], safe=False)

        newUser=UserTable(login=data['login'],name=data['name'],surname=data['surname'],password=data['password'],
                          phone=data['phone'],age=data['age'],email=data['email'],imgurl='',role='U')
        newUser.save()
        return JsonResponse([{'code':1,'message':'Вы зарегестрировались,авторизуйтесь'}],safe=False)


@csrf_exempt
def addproduct(request):
    if(request.method=='POST'):
        data = json.loads(request.body)
        print(data)
        newProduct=AppPhone(name=data['name'],description=data['description'],producer=data['producer'],
                            amount=data['amount'],price=data['price'],gpu='not',cpu='not',weight='not',display='not',
                            ram='not',memory='not',imgurl='./assets/images/'+data['imgPath'],recieveddate=data['date'])
        newProduct.save()
        return JsonResponse([{'code':1,'message':'Product has been added!'}],safe=False)
    return JsonResponse([{'code':0,'message':'Something went wrong'}],safe=False)
@csrf_exempt
def authorization(request):

    if (request.method == 'POST'):
        if (UserTable.objects.filter(email=json.loads(request.body)['email'])):
            if (UserTable.objects.filter(password=json.loads(request.body)['password'])):
                data = UserTable.objects.get(email=json.loads(request.body)['email'])
                return JsonResponse([{'code': 2, 'message': 'Вы успешно вошли','data':
                                     {'Name':data.name,'Email':data.email,'Registdate':data.registrationdate,
                                      'login':data.login,'pk':data.pk}
                                      }],safe=False)
            else:
                return JsonResponse([{'code': 1, 'message': 'Пароль не верный!'}],safe=False)
        else: return JsonResponse([{'code': 0, 'message': 'Email не верный!'}], safe=False)
    return JsonResponse([{'code':-1,'message':'Ошибка!'}])
def main(request):
    return HttpResponse("<h1>welcome to the server</h1>")