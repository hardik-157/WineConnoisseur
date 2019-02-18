import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Wine
{
  id : string,
  country : string,
  description : string,
  designation : string,
  points : string,
  price : string,
  province : string,
  region_1 : string,
  region_2 : string,
  variety : string,
  winery : string,
}

@Injectable({
  providedIn: 'root'
})
export class GetwinesService {

  constructor(private http: HttpClient) { }

  getwines(i:any){
    return this.http.get('http://127.0.0.1:8000/home/?page=' + i,{responseType: 'json'});
  }

  getcountry(data:any,i:any)
  {
    return this.http.get('http://127.0.0.1:8000/home/?category=country&data=' + data + '&page=' + i,{responseType: 'json'});
  }

  getprovince(data:any,i:any)
  {
    return this.http.get('http://127.0.0.1:8000/home/?category=province&data=' + data + '&page=' + i,{responseType: 'json'});
  }

  getregions(data:any,i:any)
  {
    return this.http.get('http://127.0.0.1:8000/home/?category=regions&data=' + data + '&page=' + i,{responseType: 'json'});
  }
}
