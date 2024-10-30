import { Component, Input, OnInit } from '@angular/core';
import { RestaurantServiceService } from '../../../services/restaurant-service.service';
import { Restaurant } from '../../../model/restaurant';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-item.component.html',
  styleUrl: './restaurant-item.component.css'
})
export class RestaurantItemComponent implements OnInit{

  @Input() res: Restaurant = new Restaurant();

  public isLogIn: boolean=false;
  public adminLogin: boolean=false;

  constructor(private resService: RestaurantServiceService) {
   }

  ngOnInit(): void {
    if (sessionStorage.getItem("token")) {
      this.isLogIn=true;
    }
    if (sessionStorage.getItem("admin")) {
      this.adminLogin=true;
    }
    console.log(this.res.photo)
    console.log(sessionStorage.getItem("admin"));
  }

  deleteRes(name: string) {
    this.resService.deleteRes(name).subscribe((resp: boolean) => {
      if (resp==true) {
        console.log("Restoran je izbrisan")
        window.location.reload();
      }
    })
  }

}
