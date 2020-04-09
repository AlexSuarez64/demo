import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { environment } from '@env/environment';

import quotes from '../data/racv-quote-data.json';
import quotes2 from '../data/racv-quote-data2.json';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TableService {
  data: any;

  constructor(private hc: HttpClient) {}

  getData(model: string, base: string, path: string): Observable<any[]> {
    switch (model) {
      case 'Quotes':
        this.data = quotes;
        return of(this.data);
      case 'Quotes2':
        this.data = quotes2;
        return of(this.data);
      default:
        this.getAPIData(model).subscribe(value => {
          this.data = value;
          return of(this.data);
        });
    }
  }

  getAPIData(model: string): Observable<any[]> {
    const url = `${environment.OCTAAPI_END_POINT}/${model}`;
    return this.hc
      .get<any[]>(url, { responseType: 'json' })
      .pipe(catchError(this.handleError));
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
