import { computed, Injectable, signal, WritableSignal } from "@angular/core";
import { Activity } from "../models/activity";
import { Order } from "../components/orders/orders";
import { FirebaseService } from "./firebase.service";

@Injectable({ providedIn: 'root' })
export class CartService {

  private cartItemsSignal: WritableSignal<Activity[]> = signal<Activity[]>([]);
  readonly cartItems = this.cartItemsSignal.asReadonly();

  readonly cartTotal = computed(() => {
    return this.cartItems().reduce((total, item) => total + item.price, 0);
  })

  constructor(private firebase: FirebaseService) {
    const savedCartItems = localStorage.getItem('taniti-cart');

    if (savedCartItems) {
      this.cartItemsSignal.set(JSON.parse(savedCartItems));
    }
  }

  private saveCart() {
    localStorage.setItem("taniti-cart", JSON.stringify(this.cartItemsSignal()));
  }

  addItem(item: Activity): void {
    this.cartItemsSignal.update((currentItems) => [...currentItems, item]);
    this.saveCart();
  }

  removeItem(item: Activity): void {
    console.log('CART SERVICE: Deleting ' + item.name);

    this.cartItemsSignal.update((currentItems) => currentItems.filter(i => i.id !== item.id));

    this.saveCart();
  }

  clearItems(): void {
    this.cartItemsSignal.set([]);
    this.saveCart();
  }

  // FIREBASE
  async submitOrder() {
    console.log('CART SERVICE: Submitting Order...')

    const rawActivities = this.cartItems();
    const total = this.cartTotal();

    // Check if the Cart is Empty
    if (this.cartItems().length === 0) {
      console.error('CART SERVICE: Cannot submit an empty order.')
      return;
    }

    // Ensure Activities is Clean
    const activitiesPayload = this.cartItems().map(activity => ({
      id: activity.id,
      name: activity.name,
      price: Number(activity.price),

      ...(typeof activity.image === 'string' && activity.image.length > 0 ? { image: activity.image } : {})
    }));

    // Validate Activities
    const allActivitiesValid = activitiesPayload.every(activity => this.isValidActivityClient(activity));

    if (!allActivitiesValid) {
      // Stop Submission if Validation Fails
      console.error('CART SERVICE: Submission Cancelled due to invalid Activity Data.');
      throw new Error('CART SERVICE: Invalid Activity Data in Cart.');
    }

    const order: Order = { activities: activitiesPayload, total: total };

    console.log('CART SERVICE: Payload for Firestore: ' + JSON.stringify(order, null, 2));

    try {
      const res = await this.firebase.saveOrder2(order);
      console.log('CART SERVICE: Order saved with ID: ' + res.id);

      this.clearItems();

      return res.id;
    } catch (error) {
      console.error('CART SERVICE: Failed to submit Order: ' + error);
      throw error;
    }
  }

  isValidActivityClient(activity: any): boolean {
    if (typeof activity.id !== 'string' || activity.id.length === 0) {
      console.error("CART SERVICE: Validation Error: Invalid ID: ", activity);
      return false;
    }

    if (typeof activity.name !== 'string' || activity.name.length === 0) {
      console.error("CART SERVICE: Validation Error: Invalid Name: ", activity);
      return false;
    }

    if (!Number.isFinite(activity.price)) {
      console.error("CART SERVICE: Validation Error: Invalid Price: ", activity);
      return false;
    }

    if (activity.image !== undefined && typeof activity.image !== 'string') {
      console.error("CART SERVICE: Validation Error: Invalid Image: ", activity);
      return false;
    }

    return true;
  }
}