import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "http://localhost:5000/api/auth";
  constructor(private http:HttpClient){}
  signup(user:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/signup`,user);
  }
  
}
