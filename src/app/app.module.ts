import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { ChooseTypeComponent } from './components/choose-type/choose-type.component';
import { ConversionTableComponent } from './components/conversion-table/conversion-table.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChooseTypeComponent,
    ConversionTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
