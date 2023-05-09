import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient, HttpHeaders , HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DronesService {
  public url:string
  
  constructor(
    private _http:HttpClient
  ){
    this.url= Global.url
  }
  getDrones():Observable<any>{
        
    let headers=new HttpHeaders().set('Content-Type','application/json');
    
    return this._http.get(this.url+'APIObtenerDrones',{headers:headers});
}
}
