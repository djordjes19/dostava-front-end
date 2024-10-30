import { Component, OnInit } from '@angular/core';
import { Meal } from '../../../model/meal';
import { Observable } from 'rxjs';
import { MealService } from '../../../services/meal.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MealItemComponent } from '../meal-item/meal-item.component';

@Component({
  selector: 'app-meal-list',
  standalone: true,
  imports: [CommonModule,MealItemComponent],
  templateUrl: './meal-list.component.html',
  styleUrl: './meal-list.component.css'
})
export class MealListComponent implements OnInit{

  public name: string = "";
  public price: string = "";
  public kcal: string = "";

  public restaurantName: string = '';

  public isLogIn: boolean = false;
  public adminLogin: boolean = false;


  public meals$!: Observable<Meal[]>;

  constructor(private mealService: MealService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.restaurantName = params['restaurantName']
    })
    this.restaurantName = this.restaurantName.slice(0, this.restaurantName.length - 1)
    sessionStorage.setItem("restaurantName", this.restaurantName)
    if (sessionStorage.getItem("token")) {
      this.isLogIn = true;
    }
    if (sessionStorage.getItem("admin")) {
      this.adminLogin = true;
    }
    this.meals$ = this.mealService.getMeal(this.restaurantName)
  }

  updateMeals() {
    this.meals$ = this.mealService.getMeals(this.name, this.price, this.kcal);
  }

}
