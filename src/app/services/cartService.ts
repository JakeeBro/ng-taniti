import { Injectable } from "@angular/core";
import { Activity } from "../models/activity";

@Injectable({ providedIn: 'root' })
export class CartService {

  private items: Activity[] = [];

  constructor() {
    const saved = localStorage.getItem('taniti-cart');

    if (saved) {
      this.items = JSON.parse(saved);
    }
  }

  private saveCart() {
    localStorage.setItem("taniti-cart", JSON.stringify(this.items));
  }

  getItems(): Activity[] {
    return this.items;
  }

  addItem(item: Activity): void {
    this.items.push(item);
    this.saveCart();
  }

  removeItem(item: Activity): void {
    console.log('CART SERVICE: Deleting ' + item.name);

    this.items = this.items.filter(i => i.id !== item.id);
    this.saveCart();
  }

  clearItems(): void {
    this.items = [];
    this.saveCart();
  }

  priceTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}