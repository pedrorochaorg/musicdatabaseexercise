# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-09-30 00:03
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20160929_1830'),
    ]

    operations = [
        migrations.AlterField(
            model_name='music',
            name='album',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
    ]