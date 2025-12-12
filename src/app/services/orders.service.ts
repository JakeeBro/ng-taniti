import { Injectable, signal, WritableSignal } from "@angular/core";
import { Order } from "../components/orders/orders";
import { FirebaseService } from "./firebase.service";

@Injectable({ providedIn: 'root' })
export class OrderService {

  private ordersSignal: WritableSignal<Order[]> = signal<Order[]>([]);
  readonly orders = this.ordersSignal.asReadonly();

  private loadingSignal: WritableSignal<boolean> = signal<boolean>(true);
  readonly loading = this.loadingSignal.asReadonly();

  constructor(private firebase: FirebaseService) {}

  async refreshOrders() {

    this.ordersSignal.set([]);
    this.loadingSignal.set(true);

    try {
      const rawOrders = await this.firebase.getOrders2();

      this.ordersSignal.set(rawOrders.map(o => ({
        ...o,
        createdAt: o.createdAt ? new Date(o.createdAt.seconds * 1000) : o.createdAt
      })))

    } catch (err) {
      console.error('ORDERS SERVICE: Failed to load orders: ' + err);
    } finally {
      this.loadingSignal.set(false);
    }
  }

  async deleteOrder(id: string) {
    try {
      await this.firebase.deleteOrder2(id);
      await this.refreshOrders();
    } catch (err) {
      console.error('ORDERS SERVICE: Failed to delete order: ' + err);
    }
  }
}