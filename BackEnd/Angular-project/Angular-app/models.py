from django.db import models

# Create your models here.
class AppPhone(models.Model):

    producer = models.CharField(max_length=25)
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    ram = models.CharField(max_length=7)
    memory = models.CharField(max_length=7)
    display = models.CharField(max_length=10)
    gpu = models.CharField(max_length=20)
    cpu = models.CharField(max_length=20)
    weight = models.CharField(max_length=7)
    recieveddate = models.DateTimeField()
    amount = models.IntegerField()
    imgurl = models.CharField(max_length=40, blank=True, null=True)
    price = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'app_phone'


class Cart(models.Model):
    userid = models.OneToOneField('UserTable', models.DO_NOTHING, db_column='userid', primary_key=True)
    phoneid = models.ForeignKey(AppPhone, models.DO_NOTHING, db_column='phoneid')
    amount = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'cart'
        unique_together = (('userid', 'phoneid'),)


class UserTable(models.Model):

    name = models.CharField(max_length=20)
    surname = models.CharField(max_length=20)
    login = models.CharField(max_length=20)
    password = models.CharField(max_length=12)
    email = models.CharField(max_length=40)
    phone = models.CharField(max_length=16, blank=True, null=True)
    age = models.SmallIntegerField()
    registrationdate = models.DateField()
    imgurl = models.CharField(max_length=40, blank=True, null=True)
    role = models.CharField(max_length=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user_table'
