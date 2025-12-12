import { Component, Input, signal } from '@angular/core';
import {NavLink, NavLinkData} from "../nav-link/nav-link";

@Component({
  selector: 'app-explore',
  imports: [
    NavLink
  ],
  templateUrl: './explore.html',
  styleUrl: './explore.css',
})
export class Explore {
  @Input({ required: true }) exploreData!: NavLinkData[];

  isMenuOpen = signal(false);

  explore: NavLinkData = {
    text: 'Explore',
    route: '#',
    icon: 'icons/explore.png',
    displayMode: 'icon-only'
  }

  toggleMenu() {
    this.isMenuOpen.update(current => !current);
    console.log(this.isMenuOpen())
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
