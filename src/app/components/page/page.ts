import { Component, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Banner, BannerData } from "../banner/banner";
import {Info, InfoData} from "../info/info";

export interface PageData {
  bannerData: BannerData;
  desc: InfoData;
  infoData: InfoData[];
}

@Component({
  selector: 'app-page',
  imports: [
    Banner,
    Info
  ],
  templateUrl: './page.html',
  styleUrl: './page.css',
})
export class Page {
  @Input() pageData!: PageData;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.pageData = this.route.snapshot.data['data'];
  }
}
