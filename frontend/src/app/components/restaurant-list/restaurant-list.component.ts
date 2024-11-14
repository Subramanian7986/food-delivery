import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Restaurant {
  _id: string;
  name: string;
  image: string;
}

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html'
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Restaurant[]>('http://localhost:3000/api/restaurants')
      .subscribe(data => this.restaurants = data);
  }
}
