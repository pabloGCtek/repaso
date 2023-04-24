import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { EventoComponent } from './evento/evento.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { ServicioComponent } from './servicio/servicio.component';
import { Padre1Component } from './padre1/padre1.component';
import { Padre2Component } from './padre2/padre2.component';
import { DosParamMandaComponent } from './dos-param-manda/dos-param-manda.component';
import { DosParamRecibeComponent } from './dos-param-recibe/dos-param-recibe.component';
import { UnParamMandaComponent } from './un-param-manda/un-param-manda.component';
import { UnParamRecibeComponent } from './un-param-recibe/un-param-recibe.component';

const routes: Routes = [
  {path: 'interpolacion', component: InterpolacionComponent},
  {path: 'oneway', component: OneWayBindingComponent},
  {path: 'evento', component: EventoComponent},
  {path: 'twoway', component: TwoWayBindingComponent},
  {path: 'servicio', component: ServicioComponent},
  {path: 'directivas', component: DirectivasComponent},
  {path: '1param', component: UnParamMandaComponent},
  {path: '2param', component: DosParamMandaComponent},
  {path: '1paramRecibe/:id', component: UnParamRecibeComponent},
  {path: '2paramRecibe', component: DosParamRecibeComponent},

  {path: 'padreaHijo', component: Padre1Component},
  {path: 'hijoaPadre', component: Padre2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
