import { Component, OnInit } from '@angular/core';
import { Meal } from '../../../model/meal';
import { MealService } from '../../../services/meal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-meal',
  standalone: true,
  imports: [],
  templateUrl: './order-meal.component.html',
  styleUrl: './order-meal.component.css'
})
export class OrderMealComponent implements OnInit {

  public name: string='';
  public meal: Meal = new Meal();

  constructor(private mealService:MealService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name=params['name']
    })
    sessionStorage.setItem("mealToOrder", this.name);
    this.mealService.getMealByName(this.name).subscribe(resp => {
      this.meal = resp;
    })
  }

  orderMeal() {
    alert("Vasa porudrbina uskoro stize!")
    this.mealService.orderMeal(this.name, sessionStorage.getItem("token")!).subscribe(resp => {
      if (resp==true) {
      console.log("Narucivanje uspesno");
      this.router.navigate(['/restaurants']);
      }
      else {
        alert("Narucivanje neuspesno")
      }
    })
    console.log("Gotovo")
  }
}
