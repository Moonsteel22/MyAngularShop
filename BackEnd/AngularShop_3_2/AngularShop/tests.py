from django.test import TestCase
from models import AppPhone,UserTable,Cart
# Create your tests here.
from datetime import datetime

class AppPhoneTestClass(TestCase):

    def setUp(self)->None:
        self.User=UserTable.objects.create(name='Test',surname='Test',login='TestLogin',
                                           password='TestPass',email='Test@mail.ru',age='20',
                                           registrationdate=datetime.now(),imgurl='',role='U')
        self.Admin=UserTable.objects.create(name='TestAdmin',surname='TestAd',login='TestAdminLogin',
                                           password='TestPass',email='TestAdmin@mail.ru',age='23',
                                           registrationdate=datetime.now(),imgurl='',role='A')