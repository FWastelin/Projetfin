import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { Errot404Component } from './components/shared/errot404/errot404.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { AgendaComponent } from './components/pages/agenda/agenda.component';
import { DojoComponent } from './components/pages/dojo/dojo.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ClientComponent } from './components/pages/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Errot404Component,
    NavComponent,
    AgendaComponent,
    DojoComponent,
    ContactComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
