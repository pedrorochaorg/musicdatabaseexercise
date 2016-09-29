from django.conf.urls import url, include
from api.viewsets.user import UserViewSet
from api.viewsets.music import MusicViewSet
from rest_framework import routers

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'musics', MusicViewSet)

urlpatterns = [
    url(r'^', include(router.urls))
]
