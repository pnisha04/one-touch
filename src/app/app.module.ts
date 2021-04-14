import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
