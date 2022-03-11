import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private httpClient: HttpClient) { }

  getSomething(param: any): Observable<any> {
    return this.httpClient.get<any>('http://www.api.com/example');
  }
}
