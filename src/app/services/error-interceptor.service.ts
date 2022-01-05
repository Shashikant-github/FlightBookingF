import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<any> {
    console.log("interception in Progress");
    // const token:string|null = localStorage.getItem('MyToken');
    // request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    // request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    // request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
  
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse)=>{
        let errorMsg="";
        if(error.error instanceof ErrorEvent){
          console.log("This is client side error");
          errorMsg=`Error: ${error.error.message}`;
        }
        else{
          console.log("This is server side Error");
          errorMsg=`Error Status:${error.status} and Error Message:${error.message}`

        }
        console.log(errorMsg);
        return throwError(() => new Error(errorMsg));
        //return throwError(errorMsg);
      })
    );
  }
}
