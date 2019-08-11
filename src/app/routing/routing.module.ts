import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ResearchPublicationsComponent } from '../components/research-publications/research-publications.component';
import { AwardsComponent } from '../components/awards/awards.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { WhoWeAreComponent } from '../components/who-we-are/who-we-are.component';
import { WhatWeDoComponent } from '../components/what-we-do/what-we-do.component';
import { OurClientsComponent } from '../components/our-clients/our-clients.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'who-we-are', component: WhoWeAreComponent },
  { path: 'what-we-do', component: WhatWeDoComponent },
  { path: 'our-clients', component: OurClientsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'research-and-publications', component: ResearchPublicationsComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class RoutingModule { }
