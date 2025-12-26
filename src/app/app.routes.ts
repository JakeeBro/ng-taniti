import { Routes } from '@angular/router';
import { Home } from "./components/home/home";
import { Page } from "./components/page/page";
import { transportationData, lodgingData, foodData, entertainmentData, sightseeingData, faqData } from "./components/page/pageInfo";
import { Cart } from "./components/cart/cart";
import { Orders } from "./components/orders/orders";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  // { path: 'transportation', component: Page, data: { data: transportationData }},
  // { path: 'lodging', component: Page, data: { data: lodgingData }},
  // { path: 'food', component: Page, data: { data: foodData }},
  { path: 'entertainment', component: Page, data: { data: entertainmentData }},
  { path: 'sightseeing', component: Page, data: { data: sightseeingData }},
  { path: 'cart', component: Cart },
  { path: 'profile', component: Orders },
  { path: 'faq', component: Page, data: { data: faqData }}
];
