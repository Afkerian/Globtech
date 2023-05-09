import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from './global';
import { Observable } from 'rxjs';

@Injectable()
export class GeoserviciosService {
  public url:string

  constructor(
    private _http:HttpClient
  ) { 
    this.url= Global.url
  }
  getGeoservicios():Observable<any>{
        
    let headers=new HttpHeaders().set('Content-Type','application/json');
    
    return this._http.get(this.url+'APIObtenerGeoservicios',{headers:headers});
}
}
