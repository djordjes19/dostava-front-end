import { Injectable } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RestaurantServiceService } from './restaurant-service.service';
import { Observable } from 'rxjs';
import { Meal } from '../model/meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  public r: Restaurant = new Restaurant();

  BACKEND_BASE = "http://localhost:8080/api/";

  constructor(private http: HttpClient, private resService: RestaurantServiceService) { }

  getMeal(name: string): Observable<Meal[]> {
    let params = new HttpParams().set("name", name)
    return this.http.get<Meal[]>(this.BACKEND_BASE + "allMeals", {params});
  }

  getMeals(name: string, price: string, kcal: string): Observable<any> {
    let params = new HttpParams()
      .set("name", name)
      .set("price", price)
      .set("kcal", kcal);
    return this.http.get<Meal[]>(this.BACKEND_BASE + "filter", { params });

  }

  addMeal(mealForm: Meal): Observable<Meal> {
    let params = new HttpParams()
      .set("name", mealForm.name)
      .set("price", mealForm.price)
      .set("kcal", mealForm.kcal)
      .set("slika", mealForm.slika)
      .set("res", sessionStorage.getItem('restaurantName')!);

    return this.http.post<Meal>(this.BACKEND_BASE + "addMeal", params);
  }

  deleteMeal(name: string): Observable<any> {
    let params = new HttpParams().set("name", name)
    return this.http.post(this.BACKEND_BASE + "deleteMeal", params);
  }

  updateMeal(name: string, price:number, slika: string): Observable<any> {
    let params=new HttpParams()
    .set("name", name)
    .set("price", price)
    .set("slika", slika);
  
    return this.http.post(this.BACKEND_BASE + "updateMeal", params);
  }

  orderMeal(name: string, username: string): Observable<any> {
    console.log("Narucivanje...")
    let params = new HttpParams()
      .set("name", name)
      .set("username", username);
    return this.http.post(this.BACKEND_BASE + "orderMeal", params);
  }

  getMealByName(name: string): Observable<any> {
    let params = new HttpParams().set("name", name);
    return this.http.get(this.BACKEND_BASE + "getMealByName", {params});
  }


}
