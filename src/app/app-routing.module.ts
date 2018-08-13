import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes de la web-app
import { PrincipalComponent } from './principal/principal.component';
import { PrevencionComponent } from './prevencion/prevencion.component';
import { EmergenciasComponent } from './emergencias/emergencias.component';
import { HospitalesComponent } from './hospitales/hospitales.component';


const routes: Routes = [
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'prevencion',
    component: PrevencionComponent
  },
  {
    path: 'emergencias',
    component: EmergenciasComponent
  },
  {
    path: 'hospitales',
    component: HospitalesComponent
  },
  { path: '', redirectTo: '/principal', pathMatch:'full' }

]


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})

export class AppRoutingModule { }
