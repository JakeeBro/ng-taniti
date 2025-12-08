import { Injectable } from "@angular/core";
import { Activity } from "../models/activity";

@Injectable({ providedIn: 'root' })
export class CartService {

  private items: Activity[] = [];

  getItems(): Activity[] {
    return this.items;
  }

  addItem(item: Activity): void {
    this.items.push(item);
  }

  removeItem(item: Activity): void {
    this.items = this.items.filter(item => item.id !== item.id);
  }

  clearItems(): void {
    this.items = [];
  }

  priceTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}