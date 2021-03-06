import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:80/api/v1/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
  getIngredients(): Observable<any> {
    return this.http.get(endpoint + 'ingredients').pipe(
      map(this.extractData));
  }
  
  getBurgers(): Observable<any> {
    return this.http.get(endpoint + 'burgers').pipe(
      map(this.extractData));
  }

  getOrders(): Observable<any> {
    return this.http.get(endpoint + 'orders').pipe(
      map(this.extractData));
  }

  getOrder(id): Observable<any> {
    return this.http.get(endpoint + 'orders/' + id).pipe(
      map(this.extractData));
  }

  addOrder (order): Observable<any> {
    console.log(order);
    return this.http.post<any>(endpoint + 'orders', (order), httpOptions).pipe(
      tap((order) => console.log(`added order w/ id=${order.id}`)),
      catchError(this.handleError<any>('addOrder'))
    );
  }

  updateOrder (id, order): Observable<any> {
    console.log(order);
    return this.http.put(endpoint + 'orders/' + id, (order), httpOptions).pipe(
      tap(_ => console.log(`updated order id=${id}`)),
      catchError(this.handleError<any>('updateOrder'))
    );
  }

  deleteOrder (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'orders/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted order id=${id}`)),
      catchError(this.handleError<any>('deleteOrder'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
