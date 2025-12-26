import { Routes } from '@angular/router';
import { Home } from "./components/home/home";
import { Page } from "./components/page/page";
import { transportationData, lodgingData, foodData, entertainmentData, sightseeingData, faqData } from "./components/page/pageInfo";
import { Cart } from "./components/cart/cart";
import { Orders } from "./components/orders/orders";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Taniti | Tropical Paradise' },
  // { path: 'transportation', component: Page, data: { data: transportationData }},
  // { path: 'lodging', component: Page, data: { data: lodgingData }},
  // { path: 'food', component: Page, data: { data: foodData }},
  { path: 'entertainment', component: Page, data: { data: entertainmentData }, title: 'Taniti | Entertainment' },
  { path: 'sightseeing', component: Page, data: { data: sightseeingData }, title: 'Taniti | Sightseeing' },
  { path: 'cart', component: Cart, title: 'Taniti | Cart' },
  { path: 'profile', component: Orders, title: 'Taniti | Profile' },
  { path: 'faq', component: Page, data: { data: faqData }, title: 'Taniti | FAQ' }
];
