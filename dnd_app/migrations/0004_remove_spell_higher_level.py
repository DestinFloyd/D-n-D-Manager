# Generated by Django 2.1.5 on 2019-02-27 21:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dnd_app', '0003_auto_20190227_2122'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='spell',
            name='higher_level',
        ),
    ]
