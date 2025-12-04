import { Component, Input } from '@angular/core';

export interface BannerData {
  title?: string;
  image?: string;
  button?: string;
}

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  @Input() data?: BannerData;
}
