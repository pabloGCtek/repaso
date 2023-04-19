import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactarComponent } from './contactar/contactar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { QuienesComponent } from './quienes/quienes.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'contactar', component: ContactarComponent},
  {path: 'crud', component: FormularioComponent},
  {path: 'quienes-somos', component: QuienesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
