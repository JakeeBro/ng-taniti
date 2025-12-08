import { ChangeDetectorRef, Component} from '@angular/core';
import { Banner, BannerData, BannerType } from "../banner/banner";
import { FirebaseService } from "../../services/firebase.service";
import { Activity } from "../../models/activity";
import { DatePipe } from "@angular/common";

export interface Order {
  id?: string;
  activities: Activity[];
  total: number;
  createdAt?: any;
}

@Component({
  selector: 'app-orders',
  imports: [
    Banner,
    DatePipe
  ],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {

  bannerData: BannerData = {
    bannerType: BannerType.Subpage,
    title: '',
    image: 'banners/taniti.jpeg',
    button: 'Orders',
    interactive: false,
  }

  orders: Order[] = [];
  loading = true;

  constructor(private fb: FirebaseService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.refreshOrders();
  }

  async refreshOrders() {

    this.orders = [];
    this.loading = true;

    try {
      const rawOrders = await this.fb.getOrders();
      this.orders = rawOrders.map(o => ({
        ...o,
        createdAt: o.createdAt ? new Date(o.createdAt.seconds * 1000) : o.createdAt
      }))
    } catch (err) {
      console.error('ORDERS: Failed to load orders: ' + err);
    } finally {
      this.loading = false;
      this.cd.detectChanges();
    }
  }

  async deleteOrder(id: string) {
    try {
      await this.fb.deleteOrder(id);
      await this.refreshOrders();
    } catch (err) {
      console.error('ORDERS: Failed to delete order: ' + err);
    }
  }
}
