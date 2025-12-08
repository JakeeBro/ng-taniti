import {ChangeDetectorRef, Component} from '@angular/core';
import { CartService } from '../../services/cartService';
import { Activity } from "../../models/activity";
import { Item } from "../item/item";
import { Banner, BannerData, BannerType } from "../banner/banner";
import { FirebaseService } from "../../services/firebase.service";
import {Order} from "../orders/orders";

@Component({
  selector: 'app-cart',
  imports: [
    Item,
    Banner
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  bannerData: BannerData = {
    bannerType: BannerType.Subpage,
    title: '',
    image: 'banners/taniti.jpeg',
    button: 'Cart',
    interactive: false,
  }

  constructor(
    private cart: CartService,
    private fb: FirebaseService,
    private cd: ChangeDetectorRef) {}

  getCartItems(): Activity[] {
    return this.cart.getItems();
  }

  getCartTotal(): number {
    return this.cart.priceTotal();
  }

  // FIREBASE
  async submitOrder() {
    console.log('CART: Submitting Order...')

    const activities = this.cart.getItems();
    const total = this.cart.priceTotal();

    const order: Order = { activities: activities, total: total };

    try {
      const res = await this.fb.saveOrder(order);
      console.log('CART: Order saved with ID: ' + res.id);

      this.cart.clearItems();
      this.cd.detectChanges();

      return res.id;
    } catch (error) {
      console.error('CART: Failed to save Order: ' + error);
      throw error;
    }
  }

}
