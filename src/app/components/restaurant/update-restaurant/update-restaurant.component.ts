import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RestaurantServiceService } from '../../../services/restaurant-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-restaurant',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-restaurant.component.html',
  styleUrl: './update-restaurant.component.css'
})
export class UpdateRestaurantComponent  implements OnInit{

  
  public address: string="";
  public name: string="";
  public photo: string="";

  constructor(private resService:RestaurantServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name=params['name']
    })
  }

  updateRes() {
    this.resService.updateRes(this.name, this.address, this.photo).subscribe(resp => {
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
