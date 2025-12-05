import { Routes } from '@angular/router';
import { Home } from "./components/home/home";
import { Page } from "./components/page/page";
import { transportationData, lodgingData, foodData, entertainmentData, sightseeingData } from "./components/page/pageInfo";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'transportation', component: Page, data: { data: transportationData }},
  { path: 'lodging', component: Page, data: { data: lodgingData }},
  { path: 'food', component: Page, data: { data: foodData }},
  { path: 'entertainment', component: Page, data: { data: entertainmentData }},
  { path: 'sightseeing', component: Page, data: { data: sightseeingData }}
];
