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
    const total = this.cart.priceTotal();
    console.log('Total type: ' + typeof total, ' // Value: ' + total);

    return this.cart.priceTotal();
  }

  // FIREBASE
  async submitOrder() {
    console.log('CART: Submitting Order...')

    const rawActivities = this.cart.getItems();
    const total = this.cart.priceTotal();

    // Check Activities Here

    const activitiesPayload = rawActivities.map(activity => ({
      id: activity.id,
      name: activity.name,
      price: Number(activity.price),

      ...(typeof activity.image === 'string' && activity.image.length > 0 ? { image: activity.image } : {})
    }));

    // 1. Check if the Cart is Empty
    if (activitiesPayload.length === 0) {
      console.error('CART: Cannot submit an empty order.')
      return;
    }

    // 2. Check if EVERY item in the Array is Valid
    const allActivitiesValid = activitiesPayload.every(activity => this.isValidActivityClient(activity));

    if (!allActivitiesValid) {
      // Stop Submission if Validation Fails
      console.error('CART: Submission Cancelled due to invalid Activity Data.');
      throw new Error('CART: Invalid Activity Data in Cart.');
    }

    const order: Order = { activities: activitiesPayload, total: total };

    console.log('DEBUG: Payload for Firestore: ' + JSON.stringify(order, null, 2));

    try {
      const res = await this.fb.saveOrder2(order);
      console.log('CART: Order saved with ID: ' + res.id);

      this.cart.clearItems();
      this.cd.detectChanges();

      return res.id;
    } catch (error) {
      console.error('CART: Failed to save Order: ' + error);
      throw error;
    }
  }

  isValidActivityClient(activity: any): boolean {
    if (typeof activity.id !== 'string' || activity.id.length === 0) {
      console.error("Validation Error: Activity missing valid 'id': ", activity);
      return false;
    }

    if (typeof activity.name !== 'string' || activity.name.length === 0) {
      console.error("Validation Error: Activity missing valid 'name': ", activity);
      return false;
    }

    if (!Number.isFinite(activity.price)) {
      console.error("Validation Error: Activity 'price' is not a finite number: ", activity);
      return false;
    }

    if (activity.image !== undefined && typeof activity.image !== 'string') {
      console.error("Validation Error: Activity 'image' must be a string if present: ", activity);
      return false;
    }

    return true;
  }

}
