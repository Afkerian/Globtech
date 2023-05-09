import { Component, OnInit } from '@angular/core';
import { Geoservicio } from 'src/app/models/geoservicios';
import { GeoserviciosService } from 'src/app/services/geoservicios.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-geoservicios',
  templateUrl: './geoservicios.component.html',
  styleUrls: ['./geoservicios.component.css'],
  providers: [GeoserviciosService]
})
export class GeoserviciosComponent implements OnInit{
  public geoservicios: Geoservicio[];
  public url:string;
  constructor(
    private geoserviciosServices:GeoserviciosService
  ) {
    this.geoservicios=[];
    this.url= Global.url
   }

  ngOnInit(): void {
    this.getGeoservicios();
  }
  getGeoservicios(){
    this.geoserviciosServices.getGeoservicios().subscribe(
      response => {
        if(response.geoservicios){
          this.geoservicios=response.geoservicios;
          console.log(this.geoservicios)
        }
      },
      error=>{
        console.log(<any>error);
      }
  );
  }

}
