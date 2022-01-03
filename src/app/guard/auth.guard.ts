import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  tokenStatus?:boolean;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
let tokenStatusLocalStorage=localStorage.getItem('MyToken');
this.tokenStatus=tokenStatusLocalStorage==null?false:true;
if(this.tokenStatus){
  return true;
}
else{
  return false;
}
    
  }
  
}
