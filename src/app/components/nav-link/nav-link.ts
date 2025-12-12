import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

type DisplayMode = 'text-only' | 'icon-only' | 'both' | 'responsive' | 'responsive-hide' | 'responsive-show';

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
  @Input() isButton?: boolean = false;

  iconExempt: string[] = [
    'text-only',
    'responsive-hide'
  ]

  ngOnInit() {
    if (!this.iconExempt.includes(this.linkData.displayMode) && !this.linkData.icon) {
      console.warn(`NAV LINK: ${this.linkData.text}: displayMode '${this.linkData.displayMode}' requires an [icon] input`)
    }
  }
}
