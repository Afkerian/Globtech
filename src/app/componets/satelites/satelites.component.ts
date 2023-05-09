import { Component, OnInit } from '@angular/core';
import { Satelite } from 'src/app/models/satelites';
import { Global } from 'src/app/services/global';
import { SatelitesService } from 'src/app/services/satelites.service';

@Component({
  selector: 'app-satelites',
  templateUrl: './satelites.component.html',
  styleUrls: ['./satelites.component.css'],
  providers: [SatelitesService]
})
export class SatelitesComponent implements OnInit{
  public satelites: Satelite[];
  public url:string;

  constructor(
    private satelitesServices:SatelitesService
  ) {
    this.satelites=[];
    this.url= Global.url
   }
  ngOnInit(): void {
    this.getSatelites();
  }
  getSatelites(){
    this.satelitesServices.getSatelites().subscribe(
      response => {
        if(response.satelites){
          this.satelites=response.satelites;
          console.log(this.satelites)
        }
      },
      error=>{
        console.log(<any>error);
      }
  );
  }
}
