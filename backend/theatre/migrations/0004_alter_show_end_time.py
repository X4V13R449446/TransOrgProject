# Generated by Django 4.0.1 on 2022-01-18 08:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('theatre', '0003_remove_show_start_time_alter_show_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='show',
            name='end_time',
            field=models.TimeField(),
        ),
    ]
