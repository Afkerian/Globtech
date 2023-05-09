import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componets/contacto/contacto.component';
import { InicioComponent } from './componets/inicio/inicio.component';
import { QuienesSomosComponent } from './componets/quienes-somos/quienes-somos.component';
// import { ImagenesSatelitalesComponent } from './componets/imagenes-satelitales/imagenes-satelitales.component';
import { SoftwareComponent } from './componets/software/software.component';
import { DronesComponent } from './componets/drones/drones.component';
import { SatelitesComponent } from './componets/satelites/satelites.component';
import { GeoserviciosComponent } from './componets/geoservicios/geoservicios.component';
import { PrensaComponent } from './componets/prensa/prensa.component';
import { AccederComponent } from './componets/acceder/acceder.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  // {path: 'imagenes-satelitales', component: ImagenesSatelitalesComponent},
  {path: 'software', component: SoftwareComponent},
  {path: 'drones', component: DronesComponent},
  {path: 'satelites', component: SatelitesComponent},
  {path: 'geoservicios', component: GeoserviciosComponent},
  {path: 'prensa', component: PrensaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'acceder', component: AccederComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
