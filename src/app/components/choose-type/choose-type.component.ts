import { Component, OnInit } from '@angular/core';
import { ConversionSelectionService } from '../../serviecs/conversion-selection.service';
@Component({
  selector: 'app-choose-type',
  templateUrl: './choose-type.component.html',
  styleUrls: ['./choose-type.component.scss']
})
export class ChooseTypeComponent implements OnInit {

  public x = false;
  public y = false;
  public z = false;
  constructor(private data: ConversionSelectionService) {
   }

  selectedlength(): void{
    if ( ! this.x ) {
      console.log('a');
      this.x = true;
      this.y = false;
      this.z = false;
      this.callLength();
    }else{
      this.x = false;
    }

  }

  selectedtemp(): void{
    if ( ! this.y) {
      this.y = true;
      this.x = false;
      this.z = false;
      this.callTemp();
    }else{
      this.y = false;
    }
  }

  selectedvolumne(): void{
    if ( ! this.z) {
      this.z = true;
      this.y = false;
      this.x = false;
      this.callVolumne();
    }else{
      this.z = false;
    }
  }

  ngOnInit(): void {
  }


  callLength(): void {
    console.log(this.data);
    // tslint:disable-next-line:quotemark
    return this.data.changeMessage("length");
  }


  callTemp(): void {
    // tslint:disable-next-line:quotemark
    return this.data.changeMessage("temprature");
  }


  callVolumne(): void {
    // tslint:disable-next-line:quotemark
    return this.data.changeMessage("volumne");
  }



}
