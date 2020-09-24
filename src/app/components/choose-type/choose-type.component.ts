import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-type',
  templateUrl: './choose-type.component.html',
  styleUrls: ['./choose-type.component.scss']
})
export class ChooseTypeComponent implements OnInit {

  public x = false;
  public y = false;
  public z = false;
  constructor() {
   }

  selectedlength(): void{
    if ( ! this.x ) {
      this.x = true;
      this.y = false;
      this.z = false;
    }else{
      this.x = false;
    }

  }

  selectedtemp(): void{
    if ( ! this.y) {
      this.y = true;
      this.x = false;
      this.z = false;
    }else{
      this.y = false;
    }
  }

  selectedvolumne(): void{
    if ( ! this.z) {
      this.z = true;
      this.y = false;
      this.x = false;
    }else{
      this.z = false;
    }
  }

  ngOnInit(): void {
  }

}
