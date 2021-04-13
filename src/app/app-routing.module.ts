import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './components/pages/agenda/agenda.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DojoComponent } from './components/pages/dojo/dojo.component';
import { HomeComponent } from './components/pages/home/home.component';
import { Errot404Component } from './components/shared/errot404/errot404.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component : HomeComponent},
  {path: 'agenda', component : AgendaComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'dojo', component : DojoComponent},

  {path:'notfound', component : Errot404Component},
  {path : '**', redirectTo:'/notfound'}//si on rentre n'importe quoi =**, alors 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
