import { Component, Input } from '@angular/core';
import { Activity } from "../../models/activity";
import { CartService } from '../../services/cartService';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input() activity!: Activity;

  constructor(private cart: CartService) {}

  addToCart() {
    this.cart.addItem(this.activity);

    console.log(`${this.activity.name} added to cart`);
  }
}
