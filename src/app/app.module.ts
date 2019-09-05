import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AwardsModule } from './modules/awards/awards.module';
import { ContactUsModule } from './modules/contact-us/contact-us.module';
import { HomeModule } from './modules/home/home.module';
import { HowWeWorkModule } from './modules/how-we-work/how-we-work.module';
import { MaterialModule } from './modules/material/material.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { ResearchPublicationsModule } from './modules/research-publications/research-publications.module';
import { RoutingModule } from './modules/routing/routing.module';
import { WhatWeDoModule } from './modules/what-we-do/what-we-do.module';
import { WhoWeAreModule } from './modules/who-we-are/who-we-are.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    PageNotFoundComponent,
    FooterComponent,
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
    HowWeWorkModule,
    ProjectsModule,
    ResearchPublicationsModule,
    WhatWeDoModule,
    WhoWeAreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
