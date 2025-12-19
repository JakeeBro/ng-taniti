import {Component, Input} from '@angular/core';

enum ListingType {
  PrimaryInfo, // ID, Title, Content, Image?
  SecondaryInfo, // ID, Content, Image?
  FAQ, // ID, Title, Content, (CSS Change)
  Activity, // ID, Title, Content?, Price, Image,
  Vendor, // ID, Title, Content, Price, Image?, (CSS Change)
}

// Used for Price Text
enum PricingType {
  None, // No Price Listed
  StartingAt, // For Things that may cost more
  Reservation, // For Static Pricing
  ExternalVendor // See Price on Vendor Site
}

// Used for Button Text
export enum PurchaseMethod {
  None, // Not a Reservation, Ticket, or Pass of any kind (Grocery Stores, Convenience Stores, etc)
  OnlineInternal, // Add to Cart
  OnlineExternal, // Reserve on External Site
  InPerson // Buy when you get here!
}

export interface ListingData {
  id: string;
  type: ListingType;
  title?: string;
  content?: string;
  price?: number;
  pricing: PricingType;
  purchaseMethod: PurchaseMethod;
  image?: string;
}

@Component({
  selector: 'app-listing',
  imports: [],
  templateUrl: './listing.html',
  styleUrl: './listing.css',
})
export class Listing {
  @Input({ required: true }) listing!: ListingData;

  convertPricing(pricing: PricingType): string {
    switch(pricing) {
      case PricingType.None:
        return '';
      case PricingType.StartingAt:
        return 'Starting at: '
      case PricingType.Reservation:
        return 'Reserve now: '
      case PricingType.ExternalVendor:
        return 'See price on vendor site: '
    }
  }

  convertBooking(booking: PurchaseMethod): string {
    switch(booking) {
      case PurchaseMethod.None:
        return '';
      case PurchaseMethod.OnlineInternal:
        return 'Buy now: '
      case PurchaseMethod.OnlineExternal:
        return 'Book on vendor site: '
      case PurchaseMethod.InPerson:
        return 'In-person booking only: '
    }
  }

  protected readonly ListingType = ListingType;
  protected readonly BookingType = PurchaseMethod;
}
