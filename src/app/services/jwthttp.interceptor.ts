import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JWTHttpInterceptor implements HttpInterceptor {

  constructor() {
    //var token1 = localStorage.getItem('MyToken');
  }
intercept(req: HttpRequest<any>,
      next: HttpHandler): Observable<HttpEvent<any>> {

const idToken = localStorage.getItem("MyToken");
console.log(idToken);
console.log("Jwt progress");

if (idToken) {
    const cloned = req.clone({
        headers: req.headers.set("Authorization",
            "Bearer " + idToken)
    });

    return next.handle(cloned);
}
else {
    return next.handle(req);
}
}

 
}
 

