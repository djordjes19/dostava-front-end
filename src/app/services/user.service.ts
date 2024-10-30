import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BACKEND_BASE = "http://localhost:8080/api/"

  constructor(private http:HttpClient) { }

  register(user: User): Observable<any> {
    return this.http.post(this.BACKEND_BASE + "register", user);
  }

  login(username: string, password: string): Observable<any> {
    let params = new HttpParams()
      .set("username", username)
      .set("password", password);

    return this.http.post<User>(this.BACKEND_BASE + "login", params, {

      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    }
    )
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.BACKEND_BASE + "allUsers");
  }

  deleteUser(username: string):Observable<any> {
    let params=new HttpParams().set("username", username);

    return this.http.post(this.BACKEND_BASE + "deleteUser", params);
  }
}
