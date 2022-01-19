from django.contrib.auth.models import AbstractUser
from django.db.models import EmailField


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    email = EmailField(null=False, blank=True, unique=True)
    REQUIRED_FIELDS = ['first_name', 'last_name']
    username = None

    class Meta:
        ordering = '-pk',
