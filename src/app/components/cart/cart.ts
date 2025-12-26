import { Component, Signal } from '@angular/core';
import { CartService } from '../../services/cartService';
import { Activity } from "../../models/activity";
import { Item } from "../item/item";
import { Banner, BannerData, BannerType } from "../banner/banner";

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
    image: 'banners/taniti.webp',
    button: 'Cart',
    interactive: false,
  }

  cartItems!: Signal<Activity[]>;
  cartTotal!: Signal<number>;

  constructor(private cartService: CartService) {
    this.cartItems = cartService.cartItems;
    this.cartTotal = cartService.cartTotal;
  }

  async submitOrder() {
    try {
      await this.cartService.submitOrder();
    } catch (error) {
      console.log('CART: Error submitting Order: ' + error);
    }
  }
}
