import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OnamaComponent } from './components/onama/onama.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './components/meal/meal-list/meal-list.component';
import { MealItemComponent } from './components/meal/meal-item/meal-item.component';
import { AddMealComponent } from './components/meal/add-meal/add-meal.component';
import { OrderMealComponent } from './components/meal/order-meal/order-meal.component';
import { AddRestaurantComponent } from './components/restaurant/add-restaurant/add-restaurant.component';
import { RestaurantItemComponent } from './components/restaurant/restaurant-item/restaurant-item.component';
import { RestaurantListComponent } from './components/restaurant/restaurant-list/restaurant-list.component';
import { UpdateRestaurantComponent } from './components/restaurant/update-restaurant/update-restaurant.component';
import { UpdateMealComponent } from './components/meal/update-meal/update-meal.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MealItemComponent, OrderMealComponent,AddRestaurantComponent,RestaurantItemComponent,RestaurantListComponent,UpdateRestaurantComponent, AddMealComponent, LoginComponent,OnamaComponent,RegisterComponent,ShowUsersComponent,CommonModule,MealListComponent,UpdateMealComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dostava-hrane';

  constructor(private router: Router){
    
  }

  ngOnInit() {

  }

  public isLogIn: boolean = (sessionStorage.getItem("token") || sessionStorage.getItem("admin")) ? true : false;
  public admin: boolean = sessionStorage.getItem("admin") ? true : false;

  removeToken() {
    if (sessionStorage.getItem("token")) {
      sessionStorage.removeItem("token")
    }
    else {
      sessionStorage.removeItem("admin")
    }
    sessionStorage.clear;
    this.router.navigate(["login"]);
  }
}
