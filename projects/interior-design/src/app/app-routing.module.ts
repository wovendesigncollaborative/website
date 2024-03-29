import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule) },
    { path: 'contacts', component: ContactUsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
