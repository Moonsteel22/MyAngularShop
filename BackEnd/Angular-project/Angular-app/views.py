import django
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from .models import AppPhone
from .models import UserTable,Cart
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

    return JsonResponse([{'data': toClient}],safe=False)
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

@csrf_exempt
def deleteproduct(request):
    if(request.method=='POST'):
        try:
            ID=json.loads(request.body)['ID']
            forDelete=AppPhone.objects.get(pk=ID)
            forDelete.delete()
            return JsonResponse([{'code':1,'message':'Успех'}],safe=False)
        except: return JsonResponse([{'code':0,'message':'Ошибка! Кто-то добавил товар в корзину!'}],safe=False)
    return JsonResponse([{'code':0,'message':'error'}])

@csrf_exempt
def addtocart(request):
    if(request.method=='POST'):
        try:
            idies=json.loads(request.body)
            Cart.objects.create(userid=UserTable.objects.get(pk=idies['UserID']),phoneid=AppPhone.objects.get(pk=idies['PhoneID']),amount=1)
            return JsonResponse([{'code':1,'message':'Успех!'}],safe=False)
        except django.db.utils.IntegrityError:
            return JsonResponse([{'code': 0, 'message': 'Такой товар уже есть в корзине!!'}], safe=False)
    return JsonResponse([{'code':0,'message':'Error'}],safe=False)
def deletefromcart(request):
    print(request.GET.get('phoneid',-1))
    if (request.method == 'GET'):
        try:
            print(request.GET.get('userid',-1))
            Cart.objects.filter(phoneid=request.GET.get('phoneid',-1),userid=request.GET.get('userid',-1)).delete()

            return JsonResponse([{'code': 1, 'message': 'Успех!'}], safe=False)
        except django.db.utils.IntegrityError:
            return JsonResponse([{'code': 0, 'message': 'Такого товара нет'}], safe=False)
    return JsonResponse([{'code': 0, 'message': 'Error'}], safe=False)
def cartProducts(request):
    if(request.method=='GET'):
        buf=AppPhone.objects.raw("SELECT * FROM app_phone WHERE id in (SELECT phoneid FROM cart WHERE userid="+request.GET.get('userID',0)+ ")")
        result=[]
        for i in buf:
            result.append({'pk': i.pk, 'Producer': i.producer, 'Display': i.display,
                               'Name': i.name,
                               'Description': i.description, 'Amount': i.amount,
                               'Sum': i.amount * i.price, 'Price': i.price,
                               'Image': i.imgurl
                               })
        return JsonResponse([{'code':1,'message':'Успех!','data':result}],safe=False)

    return JsonResponse([{'code':0,'message':'nothing'}],safe=False)
def main(request):
    return HttpResponse("<h1>welcome to the server</h1>")