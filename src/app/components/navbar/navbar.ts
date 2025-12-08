import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Theme } from "../theme/theme";
import { CartService } from "../../services/cartService";
import { FirebaseService } from "../../services/firebase.service";

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLinkActive,
    RouterLink,
    Theme
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(private cart: CartService, private fb: FirebaseService) {}

  printCart() {
    length = this.cart.getItems().length

    console.log('Cart Items: ' + length);

    if (length > 0) {
      console.log(this.cart.getItems());
    }
  }

  clearCart() {
    this.cart.clearItems();

    this.printCart();
  }

  // FIREBASE TEST
  testFirebase() {
    this.fb.testConnection();
  }
}
