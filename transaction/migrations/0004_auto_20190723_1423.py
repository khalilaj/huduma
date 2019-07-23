# Generated by Django 2.2.3 on 2019-07-23 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('unit', '0001_initial'),
        ('property', '0003_property_completion_year'),
        ('transaction', '0003_auto_20190723_1421'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='property',
            field=models.ForeignKey(blank=True, null=True, on_delete=None, to='property.Property'),
        ),
        migrations.AddField(
            model_name='transaction',
            name='unit',
            field=models.ForeignKey(blank=True, null=True, on_delete=None, to='unit.Unit'),
        ),
    ]
