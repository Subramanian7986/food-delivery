import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { OrderService } from '../../services/order.service';

interface MenuItem {
  name: string;
  price: number;
  image: string;
}

interface Order {
  menuItem: MenuItem | null;
  quantity: number;
  address: string;
  totalPrice: number;
  deliveryCharge: number;
  finalTotal: number;
}

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: any; // Consider defining a proper interface for the restaurant as well
  selectedItem: MenuItem | null = null;
  order: Order = {
    menuItem: null,
    quantity: 1,
    address: '',
    totalPrice: 0,
    deliveryCharge: 5,
    finalTotal: 0
  };

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.restaurantService.getRestaurant(id).subscribe(restaurant => {
          this.restaurant = restaurant;
        });
      }
    });
  }

  openOrderForm(item: MenuItem) {
    this.selectedItem = item;
    this.order.menuItem = item;
    this.order.quantity = 1;  // Reset quantity to 1
    this.calculateTotals();  // Calculate totals
  }

  closeOrderForm() {
    this.selectedItem = null;
  }

  placeOrder() {
    if (this.order.menuItem) {
      this.orderService.createOrder(this.order).subscribe(response => {
        alert('Order placed successfully!');
        this.closeOrderForm();
      }, error => {
        alert('Error placing order');
      });
    }
  }

  calculateTotals() {
    if (this.order.menuItem) {
      this.order.totalPrice = this.order.menuItem.price * this.order.quantity;
      this.order.finalTotal = this.order.totalPrice + this.order.deliveryCharge;
    }
  }

  updateQuantity(newQuantity: number) {
    this.order.quantity = newQuantity;
    this.calculateTotals();  // Recalculate totals when quantity changes
  }
}
