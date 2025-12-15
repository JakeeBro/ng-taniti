import { Component, Input } from '@angular/core';
import { Activity } from '../../models/activity';
import { CartService } from "../../services/cartService";

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  @Input() item!: Activity;
  @Input() real: boolean = true;

  constructor(private cart: CartService) {}

  removeFromCart() {
    console.log('ITEM: Deleting ' + this.item.name);

    this.cart.removeItem(this.item);
  }

  clearCart() {
    console.log('ITEM: Clearing Cart');

    this.cart.clearItems(false);
  }
}
