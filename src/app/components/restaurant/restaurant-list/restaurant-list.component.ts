import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../model/restaurant';
import { Observable, of } from 'rxjs';
import { RestaurantServiceService } from '../../../services/restaurant-service.service';
import { RestaurantItemComponent } from '../restaurant-item/restaurant-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [RestaurantItemComponent, CommonModule],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent implements OnInit{

  public name: string = "";
  public address: string = "";

  public isLogIn: boolean = false;
  public adminLogin: boolean = false;

  private lista: Restaurant[] = [];


  public rests$!: Observable<Restaurant[]>;

  constructor(private resService: RestaurantServiceService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("token")) {
      this.isLogIn = true;
    }
    if (sessionStorage.getItem("admin")) {
      this.adminLogin = true;
    }
    this.rests$ = this.resService.getRes()
    
    this.rests$.subscribe(r => {
      this.lista = r;
    })
  }
}
