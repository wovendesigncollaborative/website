import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AwardsModule } from './awards/awards.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactUsModule } from './contact-us/contact-us.module';
import { HomeModule } from './home/home.module';
import { MaterialModule } from './material/material.module';
import { OurClientsModule } from './our-clients/our-clients.module';
import { ProjectsModule } from './projects/projects.module';
import { ResearchPublicationsModule } from './research-publications/research-publications.module';
import { RoutingModule } from './routing/routing.module';
import { WhatWeDoModule } from './what-we-do/what-we-do.module';
import { WhoWeAreModule } from './who-we-are/who-we-are.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
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
    AwardsModule,
    ContactUsModule,
    HomeModule,
    OurClientsModule,
    ProjectsModule,
    ResearchPublicationsModule,
    WhatWeDoModule,
    WhoWeAreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
