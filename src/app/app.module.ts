import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResearchPublicationsComponent } from './components/research-publications/research-publications.component';
import { AwardsComponent } from './components/awards/awards.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { TeximateModule } from 'ngx-teximate';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    ProjectsComponent,
    ResearchPublicationsComponent,
    AwardsComponent,
    ContactUsComponent,
    WhatWeDoComponent,
    OurClientsComponent,
    WhoWeAreComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CommonModule,
    RoutingModule,
    MaterialModule,
    FlexLayoutModule,
    SlideshowModule,
    TeximateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
