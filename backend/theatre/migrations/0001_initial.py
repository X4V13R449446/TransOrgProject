# Generated by Django 4.0.1 on 2022-01-17 03:02

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Show',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(default=django.utils.timezone.now)),
                ('total_available_seats', models.IntegerField(default=20)),
                ('total_booked_seats', models.IntegerField(default=0)),
                ('start_time', models.TimeField(null=True)),
                ('end_time', models.TimeField(null=True)),
                ('movie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shows', related_query_name='show', to='movies.movie')),
            ],
        ),
        migrations.CreateModel(
            name='Theatre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('address', models.TextField()),
                ('movies', models.ManyToManyField(related_name='theatres', related_query_name='theatre', through='theatre.Show', to='movies.Movie')),
            ],
        ),
        migrations.AddField(
            model_name='show',
            name='theatre',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shows', related_query_name='shows', to='theatre.theatre'),
        ),
    ]
