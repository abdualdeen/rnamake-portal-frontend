# -*- coding: utf-8 -*-
# Generated by Django 1.11.21 on 2019-06-25 19:38
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_airavata_api', '0003_auto_20190625_1926'),
    ]

    operations = [
        migrations.RemoveIndex(
            model_name='user_files',
            name='username_file_path_idx',
        ),
        migrations.AddIndex(
            model_name='user_files',
            index=models.Index(fields=['username'], name='username_idx'),
        ),
    ]