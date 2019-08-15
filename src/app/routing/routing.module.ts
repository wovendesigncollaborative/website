import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ResearchPublicationsComponent } from '../research-publications/research-publications.component';
import { WhoWeAreComponent } from '../who-we-are/who-we-are.component';
import { WhatWeDoComponent } from '../what-we-do/what-we-do.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { HomeComponent } from '../home/home.component';
import { OurClientsComponent } from '../our-clients/our-clients.component';
import { ProjectsComponent } from '../projects/projects.component';
import { AwardsComponent } from '../awards/awards.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';


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
