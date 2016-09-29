from api.models import Music
from api.serializers.music import MusicSerializer
from rest_framework import viewsets
# Serializers define the API representation.

# ViewSets define the view behavior.
class MusicViewSet(viewsets.ModelViewSet):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer