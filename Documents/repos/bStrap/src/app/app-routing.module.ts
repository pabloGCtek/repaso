import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { BlogComponent } from './blog/blog.component';
import { YComponent } from './y/y.component';

const routes: Routes = [
    {path: '', component: PrincipalComponent},
    {path: 'contact', component: YComponent},
    {path: 'blog', component: BlogComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
