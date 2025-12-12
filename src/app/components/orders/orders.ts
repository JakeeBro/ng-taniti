import { Component, OnInit, Signal } from '@angular/core';
import { Banner, BannerData, BannerType } from "../banner/banner";
import { Activity } from "../../models/activity";
import { DatePipe } from "@angular/common";
import { OrderService } from "../../services/orders.service";
import { Theme } from "../theme/theme";

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
    DatePipe,
    Theme
  ],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders implements OnInit {

  bannerData: BannerData = {
    bannerType: BannerType.Subpage,
    title: '',
    image: 'banners/taniti.jpeg',
    button: 'PROFILE',
    interactive: false,
  }

  orders!: Signal<Order[]>;
  loading!: Signal<boolean>;

  constructor(private ordersService: OrderService) {
    this.orders = ordersService.orders;
    this.loading = ordersService.loading;
  }

  ngOnInit() {
    this.ordersService.refreshOrders();
  }

  async deleteOrder(id: string) {
    try {
      await this.ordersService.deleteOrder(id);
    } catch (error) {
      console.error('ORDERS: Failed to delete Order: ' + error);
    }
  }
}
