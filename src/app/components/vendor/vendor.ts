import {Component, Input} from '@angular/core';

export interface VendorData {
  name: string;
  about: string;
  image?: string;
}

@Component({
  selector: 'app-vendor',
  imports: [],
  templateUrl: './vendor.html',
  styleUrl: './vendor.css',
})
export class Vendor {
  @Input({ required: true }) vendorData!: VendorData;
}
