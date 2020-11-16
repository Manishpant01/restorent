import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { signup } from './signupInterface'
import { from, Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'




@Injectable({
  providedIn: 'root'
})
export class NewRestaurantService {

  constructor(private http: HttpClient) { }

  postdata(response): Observable<signup[]> {
    console.log(">>>>>>>>>>>>>>>>>>>>", response);
    return this.http.post<signup[]>('http://localhost:3000/signup', response)
  }

  adminlogin(response): Observable<any> {
    console.log(">>>>>>>>>>>>>>>>>>>>", response);
    return this.http.post<any>('http://localhost:3000/adminlogin', response)
            .pipe(catchError(this.errorHandelar));
  }

  userlogin(response): Observable<any> {
    console.log(">>>>>>>>>>>>>>>>>>>>", response);
    return this.http.post<any>('http://localhost:3000/userlogin', response)
            .pipe(catchError(this.errorHandelar));
  }

  book(response): Observable<any> {
    console.log(">>>>>>>>>>>>>>>>>>>>", response);
    return this.http.post<any>('http://localhost:3000/reservation', response)
            .pipe(catchError(this.errorHandelar));
  }

  getcoustomer(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/getCustomer')
            .pipe(catchError(this.errorHandelar));
  }

  getreservation(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/getReservation')
            .pipe(catchError(this.errorHandelar));
  }

  foodadd(response,food): Observable<any> {
    console.log(">>>>>>>>>>>>>>>>>>>>", response);
    return this.http.post<any>('http://localhost:3000/file', response,food)
            .pipe(catchError(this.errorHandelar));
  }

 private errorHandelar(errorResponce :HttpErrorResponse){
    if(errorResponce.error instanceof ErrorEvent){
      console.log('client Side Error:',errorResponce.error.message);
      
    }else{
      console.log('client Side Error:',errorResponce);
    }
    return throwError('Problem with server');
  }
}
