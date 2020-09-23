import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Food {
  id: string;
  viewValue: string;
}
@Component({
  selector: 'app-conversion-table',
  templateUrl: './conversion-table.component.html',
  styleUrls: ['./conversion-table.component.scss']
})
export class ConversionTableComponent implements OnInit {
  selectedFood: string;
  constructor() { }
  selectedValue = 'dd';


  foods: Food[] = [
    {id: 'steak-0', viewValue: 'Steak'},
    {id: 'pizza-1', viewValue: 'Pizza'},
    {id: 'tacos-2', viewValue: 'Tacos'}
  ];

  ngOnInit(): void {
    this.selectedFood = this.foods[1].id;
  }

}
