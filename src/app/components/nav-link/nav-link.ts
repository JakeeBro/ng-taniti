import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

type DisplayMode = 'text-only' | 'icon-only' | 'both' | 'responsive';

export interface NavLinkData {
  text: string;
  route: string;
  icon?: string;
  displayMode: DisplayMode;
}

@Component({
  selector: 'app-nav-link',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav-link.html',
  styleUrl: './nav-link.css',
})
export class NavLink {
  @Input({ required: true }) linkData!: NavLinkData;

  ngOnInit() {
    if (this.linkData.displayMode !== 'text-only' && !this.linkData.icon) {
      console.warn(`NAV LINK: ${this.linkData.text}: displayMode '${this.linkData.displayMode}' requires an [icon] input`)
    }
  }
}
