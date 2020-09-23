import { Component } from '@angular/core';
import { ConversionTableComponent } from './components/conversion-table/conversion-table.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Quantity-measurements';
}
