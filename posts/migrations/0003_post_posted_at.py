# Generated by Django 3.1.1 on 2022-03-08 23:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_auto_20220308_1541'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='posted_at',
            field=models.DateTimeField(null=True),
        ),
    ]
