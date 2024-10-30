import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../model/restaurant';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  BACKEND_BASE = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { }

  deleteRes(name: string): Observable<any> {
    let params = new HttpParams().set("name", name)
    return this.http.post(this.BACKEND_BASE + "deleteRes", params);
  }

  updateRes(name: string, address: string, photo: string): Observable<any> {
    let params=new HttpParams()
    .set("name", name)
    .set("address", address)
    .set("photo", photo);
  
    return this.http.post(this.BACKEND_BASE + "updateRes", params);
  }

  getRes(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.BACKEND_BASE + "allRestaurants");
  }

  addRes(resForm: Restaurant): Observable<Restaurant> {
    let params = new HttpParams()
      .set("name", resForm.name)
      .set("address", resForm.address)
      .set("photo", resForm.photo);

    return this.http.post<Restaurant>(this.BACKEND_BASE + "addRes", params);
  }

  getResByName(name: string): Observable<Restaurant> {
    let params = new HttpParams().set('name', name);
    return this.http.get<Restaurant>(this.BACKEND_BASE + "getResByName", {params})
  }
}
