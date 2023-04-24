import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { EventoComponent } from './evento/evento.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ServicioComponent } from './servicio/servicio.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectivasComponent } from './directivas/directivas.component';
import { Padre1Component } from './padre1/padre1.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Padre2Component } from './padre2/padre2.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { DosParamMandaComponent } from './dos-param-manda/dos-param-manda.component';
import { DosParamRecibeComponent } from './dos-param-recibe/dos-param-recibe.component';
import { UnParamMandaComponent } from './un-param-manda/un-param-manda.component';
import { UnParamRecibeComponent } from './un-param-recibe/un-param-recibe.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    OneWayBindingComponent,
    EventoComponent,
    TwoWayBindingComponent,
    ServicioComponent,
    DirectivasComponent,
    Padre1Component,
    Hijo1Component,
    Padre2Component,
    Hijo2Component,
    DosParamMandaComponent,
    DosParamRecibeComponent,
    UnParamMandaComponent,
    UnParamRecibeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
