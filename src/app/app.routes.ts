import {  RouterModule, Routes } from '@angular/router';
import { OnamaComponent } from './components/onama/onama.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/authGuard';
import { RegisterComponent } from './components/register/register.component';
import { MealListComponent } from './components/meal/meal-list/meal-list.component';
import { AddMealComponent } from './components/meal/add-meal/add-meal.component';
import { RestaurantListComponent } from './components/restaurant/restaurant-list/restaurant-list.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { UpdateRestaurantComponent } from './components/restaurant/update-restaurant/update-restaurant.component';
import { AddRestaurantComponent } from './components/restaurant/add-restaurant/add-restaurant.component';
import { UpdateMealComponent } from './components/meal/update-meal/update-meal.component';
import { OrderMealComponent } from './components/meal/order-meal/order-meal.component';

export const routes: Routes = [
    {path:'', redirectTo:'/', pathMatch:'full'},
    {path: 'o-nama', component:OnamaComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'meals', component:MealListComponent},
    {path: 'add-meal', component:AddMealComponent},
    {path: 'show-users', component:ShowUsersComponent,canActivate: [AuthGuard]},
    {path: 'restaurants', component:RestaurantListComponent},
    {path: 'add-restaurant', component:AddRestaurantComponent},
    {path: 'update-restaurant', component:UpdateRestaurantComponent},
    {path: 'update-meal', component:UpdateMealComponent},
    {path: 'order-meal', component:OrderMealComponent},
    {path: '**', redirectTo: '/register'}
    ];