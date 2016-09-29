from api.models import User, Music
from api.serializers.user import UserSerializer
from rest_framework import routers, serializers, viewsets
# Serializers define the API representation.


# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer