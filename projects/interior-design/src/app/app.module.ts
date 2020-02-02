import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBook, faEnvelope, faEye, faMapMarkerAlt, faPhone, faTimesCircle, faUsers } from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactUsModule } from './modules/contact-us/contact-us.module';
import { HomeModule } from './modules/home/home.module';
import { MaterialModule } from './modules/material/material.module';
import { ProjectsModule } from './modules/projects/projects.module';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    ContactUsModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    ProjectsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(library: FaIconLibrary) {
    library.addIcons(faBook, faUsers, faEye, faTimesCircle, faEnvelope, faPhone, faMapMarkerAlt);
  }
}
