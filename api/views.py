from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Music

import urllib.request, json



def get_jsonparsed_data(url):
    """
    Receive the content of ``url``, parse it as JSON and return the object.

    Parameters
    ----------
    url : str

    Returns
    -------
    dict
    """
    user_agent = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.7) Gecko/2009021910 Firefox/3.0.7'

    headers = {'User-Agent': user_agent}

    request = urllib.request.Request(url, None, headers)  # The assembled request
    response = urllib.request.urlopen(request)
    data = response.read().decode("utf-8")
    return json.loads(data)

@api_view(['GET'])
@csrf_exempt
def populate_data(request):
    """
    Populates the DB with records from http://freemusicarchive.org/recent.json.
    """
    url = "http://freemusicarchive.org/recent.json"
    data = get_jsonparsed_data(url)
    for item in data['aTracks']:
        try:
            old = Music.objects.get(track_id=item['track_id'])
        except Music.DoesNotExist:
            old = None

        if old is None:
            m = Music(track_id=item['track_id'], album=item['album_title'], artist=item['artist_name'],
                      track=item['track_title'])
            m.save()

    return Response({'status': True})