from django.shortcuts import render
from django.http import HttpResponseRedirect,HttpResponse
from Home.models import Wine
import json
from django.core.paginator import Paginator

# Create your views here.
def index(request):
    category = request.GET.get('category')
    data = request.GET.get('data')

    if(category == "country" and data != ""):
        wines = Wine.objects.filter(country=data)
    elif(category == "province" and data != ""):
        wines = Wine.objects.filter(province=data)
    elif(category == "regions" and data != ""):
        wines = Wine.objects.filter(region_1=data)
    else:
        wines = Wine.objects.all()
    paginator = Paginator(wines, 10)
    page = request.GET.get('page')
    winesList = paginator.get_page(page)
    wines_dict = []
    for x in winesList:
        tmp_wine = {
            'id' : x.id,
            'country' : x.country,
            'description' : x.description,
            'designation' : x.designation,
            'points' : x.points,
            'price' : x.price,
            'province' : x.province,
            'region_1' : x.region_1,
            'region_2' : x.region_2,
            'variety' : x.variety,
            'winery' : x.winery,
        }
        wines_dict.append(tmp_wine)
    return HttpResponse(json.dumps(wines_dict), content_type="application/json")