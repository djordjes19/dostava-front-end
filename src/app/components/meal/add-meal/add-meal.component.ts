import { Component, OnInit } from '@angular/core';
import { Meal } from '../../../model/meal';
import { Restaurant } from '../../../model/restaurant';
import { MealService } from '../../../services/meal.service';
import { Router } from '@angular/router';
import { RestaurantServiceService } from '../../../services/restaurant-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-meal',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-meal.component.html',
  styleUrl: './add-meal.component.css'
})
export class AddMealComponent implements OnInit {

  public meal: Meal = new Meal();
  public cuisineName: string = '';
  private res: Restaurant = new Restaurant();

  constructor(private mealService: MealService, private router: Router, private resService: RestaurantServiceService) { }

  ngOnInit(): void {
    this.resService.getResByName(sessionStorage.getItem('restaurantName')!).subscribe(resp => {
      this.res = resp;
    })
  }

  addMeal(mealForm: { invalid: any; }) {
    if (mealForm.invalid) {
      alert("Invalid Form")
    }
    
    else {
      this.resService.getResByName(sessionStorage.getItem("restaurantName")!).subscribe(r => {
        this.res = r;
      });
      this.mealService.addMeal(this.meal).subscribe(resp => {
        alert("Uspesno dodato jelo");
        this.router.navigate(['/meals']);
      })
    }
  }
}
