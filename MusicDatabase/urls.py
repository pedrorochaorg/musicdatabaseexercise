

from django.conf.urls import url, include
from django.contrib import admin

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [

    url(r'^api/', include('api.urls')),
    url(r'^(?!api/)', include('website.urls')) # All urls except API

]
