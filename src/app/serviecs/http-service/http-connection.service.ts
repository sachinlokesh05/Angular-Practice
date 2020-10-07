import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpConnectionService {

  constructor(private http: HttpClient) { }
  headers = { Authorization: 'Bearer my-token', 'My-Custom-Header': 'foobar','Access-Control-Allow-Origin': '*'};
  httpOptions = {
    headers: new HttpHeaders({
      // tslint:disable-next-line:whitespace
    })
  };
  // tslint:disable-next-line:typedef
  postHttpService(data, url: string) {
    return this.http.post(url, data);
  }
}
