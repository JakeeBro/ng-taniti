import { Component } from '@angular/core';
import { BannerData } from "../banner/banner";
import { ListingData } from "../listing/listing";

export interface AdvancedPageData {
  bannerData: BannerData;
  intro?: string;
  listingData: ListingData[];
}

@Component({
  selector: 'app-advanced-page',
  imports: [],
  templateUrl: './advanced-page.html',
  styleUrl: './advanced-page.css',
})
export class AdvancedPage {

}
