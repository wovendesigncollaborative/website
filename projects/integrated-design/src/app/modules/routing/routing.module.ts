import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';
import { AwardsComponent } from '../awards/awards.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TeamComponent } from '../team/team.component';
import { WhatWeDoComponent } from '../what-we-do/what-we-do.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'team', component: TeamComponent },
  { path: 'competencies', component: WhatWeDoComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'connect-with-us', component: ContactUsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
