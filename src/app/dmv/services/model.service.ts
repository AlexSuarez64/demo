import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ModelService {
  constructor(private hc: HttpClient) {}

  getModel(model: string, base: string, children: string): Observable<any[]> {
    const url = `${base}${model}${children}`;
    return this.hc
      .get<any[]>(url, { responseType: 'json' })
      .pipe(catchError(this.handleError));
  }

  getModelId(model: string, base: string): Observable<any> {
    const url = `${base}${model}`;
    return this.hc
      .get<any>(url, { responseType: 'json' })
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
