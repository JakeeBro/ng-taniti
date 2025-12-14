import { Component, ElementRef, HostListener, signal, Signal, ViewChild } from '@angular/core';
import { NavLink, NavLinkData } from "../nav-link/nav-link";
import { ScreenService } from "../../services/screen.service";

@Component({
  selector: 'app-navbar',
  imports: [
    NavLink
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  isDesktop!: Signal<boolean>;

  isExploreOpen = signal(false);

  @ViewChild('exploreButtonRef', { read: ElementRef }) exploreButtonRef!: ElementRef;
  @ViewChild('exploreMenuRef', { read: ElementRef }) exploreMenuRef!: ElementRef;

  constructor(private screenService: ScreenService) {
    this.isDesktop = screenService.isDesktop;
  }

  toggleExplore() {
    this.isExploreOpen.update(current => !current);
  }

  closeExplore() {
    this.isExploreOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (!this.isExploreOpen()) return;

    const clickedElement = event.target as HTMLElement;

    const isClickOnButton = this.exploreButtonRef?.nativeElement.contains(clickedElement);
    const isClickOnMenu = this.exploreMenuRef?.nativeElement.contains(clickedElement);

    if (!isClickOnButton && !isClickOnMenu) {
      this.closeExplore();
    }
  }

  // Desktop and Mobile Responsive Links

  home: NavLinkData = {
    text: 'Home',
    route: '/home',
    icon: 'icons/home.svg',
    displayMode: 'responsive'
  }

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
    icon: 'icons/cart.svg',
    displayMode: 'icon-only'
  }

  profile: NavLinkData = {
    text: 'Profile',
    route: '/profile',
    icon: 'icons/profile.svg',
    displayMode: 'icon-only'
  }

  // Mobile Explore Tab Links

  explore: NavLinkData = {
    text: 'Explore',
    route: '#',
    icon: 'icons/explore.svg',
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
}
