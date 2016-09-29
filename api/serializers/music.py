from api.models import Music
from rest_framework import serializers
# Serializers define the API representation.

class MusicSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Music
        fields = ('pk','artist', 'album', 'track')