import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ServiceComponent} from './service/service.component';
import {RegisterComponent} from './register/register.component';
import {Route, RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  {  path: 'service' , component: ServiceComponent },
  { path: '' , component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
