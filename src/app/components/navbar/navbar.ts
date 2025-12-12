import { Component, signal, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NavLink, NavLinkData } from "../nav-link/nav-link";
import { Explore } from "../explore/explore";
import { ScreenService } from "../../services/screen.service";

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLinkActive,
    RouterLink,
    NavLink,
    Explore
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  isDesktop!: Signal<boolean>;

  isExploreOpen = signal(false);

  constructor(private screenService: ScreenService) {
    this.isDesktop = screenService.isDesktop;
  }

  toggleExplore() {
    this.isExploreOpen.update(current => !current);
  }

  closeExplore() {
    this.isExploreOpen.set(false);
  }

  home: NavLinkData = {
    text: 'Home',
    route: '/home',
    icon: 'icons/home.png',
    displayMode: 'responsive'
  }

  explore: NavLinkData = {
    text: 'Explore',
    route: '#',
    icon: 'icons/explore.png',
    displayMode: 'icon-only'
  }

  exploreLinks: NavLinkData[] = [
    {
      text: 'Transportation',
      route: '/transportation',
      displayMode: 'text-only'
    },
    {
      text: 'Lodging',
      route: '/lodging',
      displayMode: 'text-only'
    },
    {
      text: 'Food',
      route: '/food',
      displayMode: 'text-only'
    },
    {
      text: 'Entertainment',
      route: '/entertainment',
      displayMode: 'text-only'
    },
    {
      text: 'Sightseeing',
      route: '/sightseeing',
      displayMode: 'text-only'
    }
  ]

  transportation: NavLinkData = {
    text: 'Transportation',
    route: '/transportation',
    icon: '',
    displayMode: 'responsive-hide'
  }

  lodging: NavLinkData = {
    text: 'Lodging',
    route: '/lodging',
    icon: '',
    displayMode: 'responsive-hide'
  }

  food: NavLinkData = {
    text: 'Food',
    route: '/food',
    icon: '',
    displayMode: 'responsive-hide'
  }

  entertainment: NavLinkData = {
    text: 'Entertainment',
    route: '/entertainment',
    icon: '',
    displayMode: 'responsive-hide'
  }

  sightseeing: NavLinkData = {
    text: 'Sightseeing',
    route: '/sightseeing',
    icon: '',
    displayMode: 'responsive-hide'
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
