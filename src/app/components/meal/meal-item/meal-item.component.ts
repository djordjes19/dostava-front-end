import { Component, Input, OnInit } from '@angular/core';
import { Meal } from '../../../model/meal';
import { MealService } from '../../../services/meal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meal-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meal-item.component.html',
  styleUrl: './meal-item.component.css'
})
export class MealItemComponent implements OnInit{


  @Input() meal: Meal = new Meal();

  public isLogIn: boolean=false;
  public adminLogin: boolean=false;

  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("token")) {
      this.isLogIn=true;
    }
    if (sessionStorage.getItem("admin")) {
      this.adminLogin=true;
    }
  }

  deleteMeal() {
    this.mealService.deleteMeal(this.meal.name).subscribe(resp => {
      if (resp==true) {
        console.log("Jelo je izbrisano")
        window.location.reload();
      }
    })
  }
}
