from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager
from django.contrib.auth.hashers import make_password
from argon2 import PasswordHasher

# Create your models here.



class UserAccountManager(UserManager):

    def create_user(self, username, password=None):
        ph = PasswordHasher()
        pw = ph.hash(password)
        user = self.model(username=username, password=pw)
        # user.set_password(password)
        user.save()
        return user 
    


class User(AbstractUser):
    objects = UserAccountManager()
    class Meta:
        db_table = 'auth_user'