import { Component } from '@angular/core';
import { ConversionTableComponent } from './components/conversion-table/conversion-table.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Quantity-measurements';
  oppoSuits: any = ['Men', 'Women', 'Boys', 'Inspiration']
  constructor(public fb: FormBuilder) { }

  oppoSuitsForm = this.fb.group({
    name: ['']
  });

  onSubmit(): void {
    console.log(this.oppoSuitsForm.value());
  }
  changeSuit(e): void {
    this.oppoSuitsForm.get('name').setValue(e.target.value, {
       onlySelf: true
    });
  }
}
