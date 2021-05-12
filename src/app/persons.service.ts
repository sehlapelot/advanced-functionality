import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError,} from 'rxjs/operators';
import { Person } from './models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  baseUrl = "https://609c2fca2b549f00176e52ca.mockapi.io/";

  constructor(private http: HttpClient) { }

  getData(): Observable<Person[]>{

    return this.http.get(this.baseUrl + "persons")
    .pipe(
      catchError(this.handleError<any>('getData'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
