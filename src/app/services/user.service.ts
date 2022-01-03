import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserInfo } from '../models/user-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private httpClient: HttpClient) { }

  registerUser(regUser: User): Observable<boolean> {
    return this.httpClient.post<boolean>('https://localhost:5013/v1.0/api/FlightApp/User/registerUser', regUser);
  }
  loginUser(loginInfo: UserInfo):Observable<string> {
   return this.httpClient.post<string>('https://localhost:5013/v1.0/api/FlightApp/User/Login',loginInfo);
  }
}
