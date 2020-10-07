import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { ChooseTypeComponent } from './components/choose-type/choose-type.component';
import { ConversionTableComponent } from './components/conversion-table/conversion-table.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './components/home/home.component';
import { ConversionSelectionService } from './serviecs/conversion-selection.service';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpConnectionService } from './serviecs/http-service/http-connection.service';
import { ConversionServiceService } from './serviecs/conversion-service/conversion-service.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChooseTypeComponent,
    ConversionTableComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    // FormGroup,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // FormBuilder,
  ],
  providers: [ConversionSelectionService, HttpConnectionService,ConversionServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
