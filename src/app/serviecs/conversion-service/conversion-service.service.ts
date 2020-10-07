import { Injectable } from '@angular/core';
import { HttpConnectionService } from '../http-service/http-connection.service';
@Injectable({
  providedIn: 'root'
})

export class ConversionServiceService {

   baseUrl = 'http://localhost:8082/';
  constructor(private http: HttpConnectionService) { }

  // tslint:disable-next-line:typedef
  conversionUrl(data) {
    return this.http.postHttpService(data, this.baseUrl + 'units/convert');
  }
}
