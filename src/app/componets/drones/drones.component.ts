import { Component, OnInit } from '@angular/core';
import { DronesService } from 'src/app/services/drones.service';
import { Drone } from 'src/app/models/drones';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-drones',
  templateUrl: './drones.component.html',
  styleUrls: ['./drones.component.css'], 
  providers: [DronesService]
})
export class DronesComponent implements OnInit{
  public drones: Drone[];
  public url:string;
  constructor(
    private dronesServices:DronesService
  ) {
    this.drones=[];
    this.url= Global.url
   }

  ngOnInit(): void {
    this.getDrones();
  }
  getDrones(){
    this.dronesServices.getDrones().subscribe(
      response => {
        if(response.drones){
          this.drones=response.drones;
          console.log(this.drones)
        }
      },
      error=>{
        console.log(<any>error);
      }
  );
  }
}
