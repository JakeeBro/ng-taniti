import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NavLink, NavLinkData } from "../nav-link/nav-link";

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLinkActive,
    RouterLink,
    NavLink
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  home: NavLinkData = {
    text: 'Home',
    route: '/home',
    icon: 'icons/home.png',
    displayMode: 'responsive'
  }

  cart: NavLinkData = {
    text: 'Cart',
    route: '/cart',
    icon: 'icons/cart.png',
    displayMode: 'icon-only'
  }

  profile: NavLinkData = {
    text: 'Profile',
    route: '/profile',
    icon: 'icons/profile.png',
    displayMode: 'icon-only'
  }
}
