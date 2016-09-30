from django.db import models

# Create your models here.


class Music(models.Model):
    track_id = models.IntegerField(default=0)
    album = models.CharField(max_length=250,null=True,blank=True)
    track = models.CharField(max_length=250)
    artist = models.CharField(max_length=250)


class User(models.Model):
    username = models.CharField(max_length=250)
    email = models.EmailField(max_length=245,unique=True)
    musics = models.ManyToManyField(Music, blank=True)

