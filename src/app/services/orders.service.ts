import { Injectable, signal, WritableSignal } from "@angular/core";
import { Order } from "../components/orders/orders";
import { FirebaseService } from "./firebase.service";
import { ToastService } from "./toast.service";

@Injectable({ providedIn: 'root' })
export class OrderService {

  private ordersSignal: WritableSignal<Order[]> = signal<Order[]>([]);
  readonly orders = this.ordersSignal.asReadonly();

  private loadingSignal: WritableSignal<boolean> = signal<boolean>(true);
  readonly loading = this.loadingSignal.asReadonly();

  public readonly orderLimit = 5;

  constructor(private firebase: FirebaseService, private toastService: ToastService) {}

  async refreshOrders() {

    this.ordersSignal.set([]);
    this.loadingSignal.set(true);

    try {
      const rawOrders = await this.firebase.getOrders();

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
    let failed = false;

    try {
      await this.firebase.deleteOrder(id);
      await this.refreshOrders();
    } catch (err) {
      console.error('ORDERS SERVICE: Failed to delete order: ' + err);
      failed = true;
    }

    this.toastService.show(failed ? 'Failed to delete order' : `Order ${id} deleted`);
  }
}