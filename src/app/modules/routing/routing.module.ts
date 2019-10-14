import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { AwardsComponent } from '../awards/awards.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HomeComponent } from '../home/home.component';
import { HowWeWorkComponent } from '../how-we-work/how-we-work.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ResearchPublicationsComponent } from '../research-publications/research-publications.component';
import { WhatWeDoComponent } from '../what-we-do/what-we-do.component';
import { WhoWeAreComponent } from '../who-we-are/who-we-are.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'who-we-are', component: WhoWeAreComponent },
  { path: 'what-we-do', component: WhatWeDoComponent },
  { path: 'how-we-work', component: HowWeWorkComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'research-and-publications', component: ResearchPublicationsComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'connect-with-us', component: ContactUsComponent },
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
