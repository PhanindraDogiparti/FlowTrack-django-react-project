# Generated by Django 5.1.4 on 2025-02-16 09:47

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_projectmanger_project_projectmanger'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectManager',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='project',
            name='Projectmanger',
        ),
        migrations.AddField(
            model_name='project',
            name='ProjectManager',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.projectmanager'),
        ),
        migrations.DeleteModel(
            name='ProjectManger',
        ),
    ]
