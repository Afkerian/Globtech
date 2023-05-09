import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { SlideComponent } from './componets/slide/slide.component';
import { ContentComponent } from './componets/content/content.component';
import { StatisticsComponent } from './componets/statistics/statistics.component';
import { QuienesSomosComponent } from './componets/quienes-somos/quienes-somos.component';
import { SoftwareComponent } from './componets/software/software.component';
import { DronesComponent } from './componets/drones/drones.component';
import { SatelitesComponent } from './componets/satelites/satelites.component';
import { GeoserviciosComponent } from './componets/geoservicios/geoservicios.component';
import { PrensaComponent } from './componets/prensa/prensa.component';
import { ContactoComponent } from './componets/contacto/contacto.component';
import { AccederComponent } from './componets/acceder/acceder.component';
import { InicioComponent } from './componets/inicio/inicio.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlideComponent,
    ContentComponent,
    StatisticsComponent,
    QuienesSomosComponent,
    SoftwareComponent,
    DronesComponent,
    SatelitesComponent,
    GeoserviciosComponent,
    PrensaComponent,
    ContactoComponent,
    AccederComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
