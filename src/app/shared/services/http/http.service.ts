import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  get(url: string, options?: any, headers?: any, observe?: any): Observable<any> {
    const params = this.buildParams(options);
    return this.http.get(url, { params, headers, ...observe })
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((error: HttpErrorResponse) => this.err(error))
      )
  }

  /**
   * Triggering POST method
   * @param { string } url - API url with base url 
   * @param { object } options - Request parameters of POST method 
   */
  post(url: string, options: object, header?: object): Observable<any> {
    return this.http.post<HttpResponse<Object>>(url, options, header)
      .pipe(
        tap(res => {
          return res;
        }),
        catchError((error: HttpErrorResponse) => this.err(error))
      );
  }

  /**
   * Triggering PUT method
   * @param url - API url with base url 
   * @param options - Request parameters of PUT method
   */
  put(url: string, options: object, header?: object): Observable<any> {
    return this.http.put(url, options, header)
      .pipe(
        map(res => {
          return res;
        }),
        catchError((error: HttpErrorResponse) => this.err(error))
      );
  }

  /**
   * Converts to query string
   * @param { object } params - its prequires object which needs to be converted to query string
   * @returns strings of query params, eg., user=abcd&todo=delete
   */
  private buildParams(params: any) {
    const outputParams = new HttpParams();
    for (var key in params) {
      outputParams.set(key, params[key]);
    }
    return params || {};
  }

  /**
   * Converting to common error format
   * @param error 
   */
  err(error: HttpErrorResponse) {
    let resError = error.error;
    if (resError instanceof ErrorEvent) {
      return throwError(resError.message);
    } else {
      let errorStatus = error.status;
      if (errorStatus == 400) {
        let notifyError = true;
        resError = resError.error;
        if (resError.errors === null || resError.errors.length == 0) {
          notifyError = false;
        }
      } else {
        resError = resError.error;
        if (errorStatus == 401) {
          // clear cookie
        }
      }
      return throwError(resError);
    }
  }

  delete(url: string, options?: any, header?: any): Observable<any> {
    return this.http.delete(url, { headers: header, body: options }).pipe(
      map(res => {
        return res;
      }),
      catchError((error: HttpErrorResponse) => this.err(error))
    )
  }
}