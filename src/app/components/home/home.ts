import { Component } from '@angular/core';
import { Banner, BannerData, BannerType } from "../banner/banner";
import { Info, InfoData, InfoType } from "../info/info";
import {Vendor, VendorData} from "../vendor/vendor";

@Component({
  selector: 'app-home',
  imports: [
    Banner,
    Info,
    Vendor
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  bannerData: BannerData = {
    bannerType: BannerType.Primary,
    title: 'Taniti',
    image: 'banners/taniti.webp',
    button: '',
    interactive: false,
  }

  banner1: BannerData = {
    bannerType: BannerType.Subpage,
    title: '',
    image: 'banners/taniti.webp',
    button: '',
    interactive: false,
  }

  aboutData: InfoData = {
    title: 'Untamed Nature',
    type: InfoType.Primary,
    content: 'Tucked away in the heart of the Pacific, Taniti is a boutique paradise waiting to be explored. ' +
      'Across our intimate 500 square miles, you’ll find a world of dramatic contrasts—from the whisper-quiet ' +
      'serenity of sun-drenched sandy beaches to the rugged, breathtaking beauty of our rocky coastlines.',
    image: ''
  }

  aboutData2: InfoData = {
    title: 'Adventure Awaits',
    type: InfoType.Primary,
    content: 'Venture beyond the shore to discover an emerald world. Whether you’re navigating our lush tropical ' +
      'rainforests or trekking toward the majestic silhouette of our active volcanic peak, the island’s mountainous ' +
      'interior offers an unforgettable backdrop for the bold at heart.',
    image: ''
  }

  aboutData3: InfoData = {
    title: 'Authentic Culture',
    type: InfoType.Primary,
    content: 'With a community of 20,000 residents, Taniti’s heartbeat is rooted in tradition. Once a quiet haven ' +
      'for local fishermen and farmers, our island has blossomed into a vibrant destination that remains deeply ' +
      'connected to its heritage. Experience an authentic culture where the pace of life is dictated by the tides, ' +
      'and every sunset feels like an invitation to stay just a little longer.',
    image: ''
  }

  entertainmentData: InfoData = {
    title: 'Island Life',
    type: InfoType.Primary,
    content: 'From the thrill of ziplining and snorkeling to the neon lights of our nightclubs and bowling alleys, ' +
      'Taniti offers excitement at every pace. Whether you’re looking for a quiet afternoon at the museum or a ' +
      'high-energy day on the reef, your perfect island adventure starts here.',
    image: ''
  }

  sightseeingData: InfoData = {
    title: 'Explore',
    type: InfoType.Primary,
    content: 'Witness the majesty of an active volcano by air, land, or sea. From breathtaking helicopter tours ' +
      'and rainforest hikes to leisurely bike rides through local villages, our sightseeing excursions offer the ' +
      'ultimate perspective on Taniti’s natural wonders.',
    image: ''
  }

  transportationData: VendorData[] = [
    {
      name: 'Taniti Air',
      about: 'The island\'s premier international carrier',
      image: 'pageMedia/entertainment-snorkeling.webp'
    },
    {
      name: 'Tropic Travel',
      about: 'Island hopping made easy and affordable',
      image: 'pageMedia/entertainment-snorkeling.webp'
    },
    {
      name: 'Titanic III',
      about: 'Luxury travel on the high seas',
      image: 'pageMedia/entertainment-snorkeling.webp'
    },
    {
      name: 'Coral Ferry',
      about: 'The most scenic way to reach our shores',
      image: 'pageMedia/entertainment-snorkeling.webp'
    }
  ]

  lodgingData: VendorData[] = [
    {
      name: 'Etoile Residence',
      about: 'Sleek, modern suites with a French flair',
      image: 'pageMedia/entertainment-snorkeling.webp'
    },
    {
      name: 'Sentinel Retreat',
      about: 'Exclusive luxury right on the ocean',
      image: 'pageMedia/entertainment-snorkeling.webp'
    },
    {
      name: 'Anchor House',
      about: 'Your cozy home away from home by the sea',
      image: 'pageMedia/entertainment-snorkeling.webp'
    }
  ]

  foodData: VendorData[] = [
    {
      name: 'Azure Plate',
      about: 'Sophisticated coastal dining with a view',
      image: 'pageMedia/entertainment-snorkeling.webp'
    },
    {
      name: 'Shell Bistro',
      about: 'Relaxed atmosphere with world-class flavor',
      image: 'pageMedia/entertainment-snorkeling.webp'
    },
    {
      name: 'Omakase Grill',
      about: 'An intimate, chef-led culinary journey',
      image: 'pageMedia/entertainment-snorkeling.webp'
    }
  ]

  protected readonly InfoType = InfoType;
}
