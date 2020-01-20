import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeModule } from './modules/home/home.module';
import { MaterialModule } from './modules/material/material.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
