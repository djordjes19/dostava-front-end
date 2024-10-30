import { Component, OnInit } from '@angular/core';
import { MealService } from '../../../services/meal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-meal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-meal.component.html',
  styleUrl: './update-meal.component.css'
})
export class UpdateMealComponent implements OnInit{

  public price: number = 0;
  public name: string="";
  public photo: string="";

  constructor(private mealService:MealService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name=params['name']
    })
  }

  updateMeal() {
    this.mealService.updateMeal(this.name, this.price, this.photo).subscribe(resp => {
      if (resp==true) {
      console.log("Azuriranje uspesno");
      this.router.navigate(['/restaurants']);
      }
      else {
        alert("Azuriranje neuspesno")
      }
    })
  }

}
