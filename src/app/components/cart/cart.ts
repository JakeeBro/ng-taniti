import { Component } from '@angular/core';
import { CartService } from '../../services/cartService';
import { Activity } from "../../models/activity";
import { Item } from "../item/item";
import {Banner, BannerData, BannerType} from "../banner/banner";

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

  constructor(private cart: CartService) {}

  getCartItems(): Activity[] {
    return this.cart.getItems();
  }

  getCartTotal(): number {
    return this.cart.priceTotal();
  }
}
