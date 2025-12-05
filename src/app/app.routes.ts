import { Routes } from '@angular/router';
import { Home } from "./components/home/home";
import { Page } from "./components/page/page";
import { transportationData } from "./components/page/pageInfo";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'transportation', component: Page, data: { data: transportationData }}
];
