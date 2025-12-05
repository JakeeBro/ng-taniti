import { Component, Input } from '@angular/core';
import { NgClass } from "@angular/common";

export enum BannerType {
  Primary = 'primary',
  Subpage = 'subpage'
}

export interface BannerData {
  bannerType?: BannerType;
  title?: string;
  image?: string;
  button?: string;
  interactive?: boolean;
}

@Component({
  selector: 'app-banner',
  imports: [
    NgClass
  ],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  @Input() data?: BannerData;
}
