import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { PrevencionComponent } from './prevencion/prevencion.component';
import { EmergenciasComponent } from './emergencias/emergencias.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PrevencionComponent,
    EmergenciasComponent,
    HospitalesComponent,
    NavigationBarComponent,
    FooterComponent,
    SideBarComponent,
    ContactoComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
