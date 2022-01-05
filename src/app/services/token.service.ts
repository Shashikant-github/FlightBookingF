import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {
token?:string|null;
  constructor() {
   }
// Authorise():Observable<any>{
//   let headers = new HttpHeaders();
// headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Authorization',`Bearer ${localStorage.getItem("MyToken")}`);
// return this.httpClient.get<Array<Airline>>(GlobalConstants.airlineApiURL + GlobalConstants.airlineApiGetAllAirlines, { headers: headers });
intercept(request: HttpRequest<any>, next: HttpHandler) {
  // console.log("interception in Progress");
  // const token= localStorage.getItem('MyToken');
  // console.log(token);
  // request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
  // request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
  // request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

  return next.handle(request).pipe(
    catchError((error:HttpErrorResponse)=>{
      if(error && error.status===401){
        console.log("User is unauthorised");
      }
      const err=error.error.message||error.statusText;
      return throwError(()=>new Error(error.message));
    })
  );
}
      // map((event: HttpEvent<any>) => {
      //     if (event instanceof HttpResponse) {
      //         console.log('event--->>>', event);
      //     }
      //     return event;
      // }));

}
