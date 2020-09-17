import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { HomeComponent } from './components/home/home.component';
import { ChooseTypeComponent } from './components/choose-type/choose-type.component';
import { ConversionPartComponent } from './components/conversion-part/conversion-part.component';
import { ConversionHeaderComponent } from './components/conversion-header/conversion-header.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChooseTypeComponent,
    ConversionPartComponent,
    ConversionHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
