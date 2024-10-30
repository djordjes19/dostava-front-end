import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../model/restaurant';
import { RestaurantServiceService } from '../../../services/restaurant-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-restaurant',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-restaurant.component.html',
  styleUrl: './add-restaurant.component.css'
})
export class AddRestaurantComponent implements OnInit{

  public res: Restaurant = new Restaurant();

  constructor(private resService: RestaurantServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  addRes(resForm: { invalid: any; }) {
    if (resForm.invalid) {
      alert("Invalid Form")
    }
    else {
      this.resService.addRes(this.res).subscribe(resp => {
        alert("Uspesno dodat restoran");
        console.log(this.res.name)
        this.router.navigate(['/restaurants']);
      })
    }
  }
}
