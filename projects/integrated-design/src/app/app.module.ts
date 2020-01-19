import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AwardsModule } from './modules/awards/awards.module';
import { ComingSoonModule } from './modules/coming-soon/coming-soon.module';
import { ContactUsModule } from './modules/contact-us/contact-us.module';
import { HomeModule } from './modules/home/home.module';
import { MaterialModule } from './modules/material/material.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { RoutingModule } from './modules/routing/routing.module';
import { TeamModule } from './modules/team/team.module';
import { WhatWeDoModule } from './modules/what-we-do/what-we-do.module';

@NgModule({
  declarations: [
    AppComponent,
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
    ProjectsModule,
    WhatWeDoModule,
    TeamModule,
    ComingSoonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }


@NgModule({})
export class IntegratedDesignAppModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}
