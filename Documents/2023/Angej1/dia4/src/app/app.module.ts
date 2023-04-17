import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArraysComponent } from './arrays/arrays.component';
import { UnionTiposComponent } from './union-tipos/union-tipos.component';
import { FormsModule } from '@angular/forms';
import { EnumsComponent } from './enums/enums.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { Comunicacion1HijoComponent } from './comunicacion1-hijo/comunicacion1-hijo.component';
import { Comunicacion1PadreComponent } from './comunicacion1-padre/comunicacion1-padre.component';
import { Comunicacion2HijoComponent } from './comunicacion2-hijo/comunicacion2-hijo.component';
import { Comunicacion2PadreComponent } from './comunicacion2-padre/comunicacion2-padre.component';

@NgModule({
  declarations: [
    AppComponent,
    ArraysComponent,
    UnionTiposComponent,
    EnumsComponent,
    DirectivasComponent,
    Comunicacion1HijoComponent,
    Comunicacion1PadreComponent,
    Comunicacion2HijoComponent,
    Comunicacion2PadreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
