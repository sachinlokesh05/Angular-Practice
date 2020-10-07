import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConversionSelectionService } from '../../serviecs/conversion-selection.service';
import { ConversionServiceService } from '../../serviecs/conversion-service/conversion-service.service';

@Component({
  selector: 'app-conversion-table',
  templateUrl: './conversion-table.component.html',
  styleUrls: ['./conversion-table.component.scss'],
})
export class ConversionTableComponent implements OnInit {

  constructor(private data: ConversionSelectionService, private httpPost: ConversionServiceService ) {}
  @Input() subUnits: any[];
  @Input() primaryUnit: string;

  flagFirst = false;
  flagSecond = false;
  units: string;
  baseUnit: string;
  targetUnit: string;
  valueOfInitialUnit = 1;
  outputValue;
  finalResult  = 12;
  boxValue = 'boxOne';
  message: string;
  value: { baseUnit: string; valueOfInitialUnit: number; targetUnit: string; };

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message) => {
      this.message = message;
      switch (this.message) {
        // tslint:disable-next-line:quotemark
        case 'length': {
          this.primaryUnit = 'LENGTH';
          this.subUnits = ['FEET', 'INCH', 'YARD', 'CENTIMETER'];
          this.settingUpFlag(1, 12);
          break;
        }
        // tslint:disable-next-line:quotemark
        case 'temprature': {
          this.primaryUnit = 'TEMPERATURE';
          this.subUnits = ['CELSIUS', 'FAHRENHEIT'];
          this.settingUpFlag(0, 32);
          break;
        }

        case 'volumne': {
          this.primaryUnit = 'VOLUMNE';
          this.subUnits = ['LITER', 'MILLILITRE', 'GALLON'];
          this.settingUpFlag(1, 1000);
          break;
        }
        default: {
          this.primaryUnit = 'TEMPERATURE';
          this.subUnits = ['CELSIUS', 'FAHRENHEIT'];
          this.settingUpFlag(0, 32);
          break;
        }
      }
    });
  }

  // tslint:disable-next-line:typedef
  settingUpvalue(unitOne, unitTwo, initialValue) {
    this.baseUnit = unitOne;
    this.targetUnit = unitTwo;
    this.valueOfInitialUnit = initialValue;
    this.value = {
      baseUnit:
        this.boxValue === 'boxOne' ? this.baseUnit : this.targetUnit,
      valueOfInitialUnit:
        this.valueOfInitialUnit,
      targetUnit:
        this.boxValue === 'boxOne' ? this.targetUnit : this.baseUnit,
    };
  }

  // tslint:disable-next-line:typedef
  settingUpFlag(valueOne, valueTwo) {
    this.flagFirst = false;
    this.flagSecond = false;
    this.valueOfInitialUnit = valueOne;
    this.finalResult = valueTwo;
  }

  // tslint:disable-next-line:typedef
  convertedValue() {
    this.httpPost.conversionUrl(
      this.value
      ).subscribe(
      (resp: Response) => {
        this.outputValue = resp;
        console.log('Output : ', this.outputValue.value);
        this.finalResult = this.outputValue.value;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // tslint:disable-next-line:typedef
  conversion(value, boxName) {
    this.boxValue = boxName;
    this.valueOfInitialUnit = value;
    if (!this.flagFirst && !this.flagSecond) {
      this.settingUpvalue(this.subUnits[0], this.subUnits[1], value);
    }
    else if (this.flagFirst && !this.flagSecond) {
      this.settingUpvalue(this.baseUnit, this.subUnits[1], value);
    }
    else if (!this.flagFirst && this.flagSecond) {
      this.settingUpvalue(this.subUnits[0], this.targetUnit, value);
    }
    else if  (this.flagFirst && this.flagSecond) {
      this.settingUpvalue(this.baseUnit, this.targetUnit, value);
    }
    this.convertedValue();
  }

  // tslint:disable-next-line:typedef
  firstSubUnit(unitOne) {
    this.flagFirst = true;
    this.baseUnit = unitOne.target.value;
  }

  // tslint:disable-next-line:typedef
  secondSubUnit(unitTwo) {
    this.flagSecond = true;
    this.targetUnit = unitTwo.target.value;
  }

}
