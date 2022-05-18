import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  users() :Observable<Users[]>{
    return this.http.get<Users[]>("http://localhost:3000/users");
  }

}
