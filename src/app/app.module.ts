import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { BannerComponent } from './Components/banner/banner.component';
import { PartnerComponent } from './Components/partner/partner.component';
import { WhatWeDoComponent } from './Components/what-we-do/what-we-do.component';
import { LandingComponent } from './Components/landing/landing.component';
import { ContactComponent } from './Components/contact/contact.component';
import {HeaderComponent} from './Components/Common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BannerComponent,
    PartnerComponent,
    WhatWeDoComponent,
    LandingComponent,
    ContactComponent,
    HeaderComponent
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
