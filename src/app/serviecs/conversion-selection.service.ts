import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversionSelectionService {

  private messageSource = new BehaviorSubject('temprature');
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  // tslint:disable-next-line:typedef
  changeMessage(message: string) {
    return this.messageSource.next(message);
  }
}
