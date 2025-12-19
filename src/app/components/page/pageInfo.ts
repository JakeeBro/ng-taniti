import {PageData} from "./page";
import {BannerType} from "../banner/banner";
import {InfoData, InfoType} from "../info/info";
import {
  entertainmentActivities,
  foodActivities,
  lodgingActivities,
  sightseeingActivities,
  transportationActivities
} from "../../models/activity";

const questionsData: InfoData[] = [
  {
    title: 'What language is spoken on Taniti?',
    type: InfoType.FAQ,
    content: 'Many younger Tanitians speak fluent English. Very little English is spoken in rural ' +
      'areas, especially by the older residents.',
    image: ''
  },
  {
    title: 'What currency is accepted on Taniti?',
    type: InfoType.FAQ,
    content: 'Taniti uses the U.S. dollar as its currency, but many businesses will also accept ' +
      'euros and yen. Several banks facilitate currency exchange, and many businesses accept major credit cards.',
    image: ''
  },
  {
    title: 'What power outlets are on the Island?',
    type: InfoType.FAQ,
    content: 'Taniti\'s power outlets are 120 volts (the same as in the United States).',
    image: ''
  },
  {
    title: 'Does the island have medical facilities?',
    type: InfoType.FAQ,
    content: 'There is one hospital and several clinics. The hospital has many multilingual employees.',
    image: ''
  },
  {
    title: 'How bad is the crime on Taniti?',
    type: InfoType.FAQ,
    content: 'Violent crime is very rare on Taniti, but as tourism increases, there are more ' +
      'reports of pickpocketing and other petty crimes.',
    image: ''
  },
  {
    title: 'What holidays does Taniti observe?',
    type: InfoType.FAQ,
    content: 'Taniti enjoys a large number of national holidays, and many tourist attractions and ' +
      'restaurants will be closed on holidays, so visitors should plan accordingly.',
    image: ''
  }
]

export const faqData: PageData = {
  bannerData: {
    bannerType: BannerType.Subpage,
    title: '',
    image: 'banners/taniti.jpeg',
    button: 'FAQ',
    interactive: false
  },
  desc: {
    title: '',
    type: InfoType.Secondary,
    content: '',
    image: ''
  },
  activityData: [],
  infoData: questionsData
}

export const transportationData: PageData = {
  bannerData: {
    bannerType: BannerType.Subpage,
    title: '',
    image: 'banners/transportation.jpeg',
    button: 'Transportation',
    interactive: false
  },
  desc: {
    title: '',
    type: InfoType.Secondary,
    content: 'Almost all visitors arrive to Taniti by air, though some arrive on a small cruise ship that docks in ' +
      'Yellow Leaf Bay for one night per week. Taniti is served by a small airport that can accommodate ' +
      'small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets ' +
      'will be able to land on the island within the next few years. ' +
      '<br><br>' +
      'Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day. Private buses serve the rest ' +
      'of the island. Taxis are available in Taniti City, and rental cars can be rented from a local rental ' +
      'agency near the airport. Bikes and helmets are available to rent from several vendors (helmets are ' +
      'required by law). Taniti City is fairly flat and very walkable. Many tourists stay in the area ' +
      'surrounding Merriton Landing: this area is easy to explore on foot.',
    image: ''
  },
  activityData: transportationActivities,
  infoData: []
}

export const lodgingData: PageData = {
  bannerData: {
    bannerType: BannerType.Subpage,
    title: '',
    image: 'banners/lodging.jpeg',
    button: 'Lodging',
    interactive: false
  },
  desc: {
    title: '',
    type: InfoType.Secondary,
    content: 'Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one large, four-star resort. ' +
      '<br><br>There are many small, family-owned hotels and a growing number of bed and breakfasts. ',
    image: ''
  },
  activityData: lodgingActivities,
  infoData: []
}

export const foodData: PageData = {
  bannerData: {
    bannerType: BannerType.Subpage,
    title: '',
    image: 'banners/food.jpeg',
    button: 'Food',
    interactive: false
  },
  desc: {
    title: '',
    type: InfoType.Secondary,
    content: 'Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve ' +
      'American-style meals, and two serve Pan-Asian cuisine. ' +
      '<br><br>Taniti has two supermarkets, two smaller grocery stores, and one convenience store that ' +
      'is open 24 hours a day. ',
    image: ''
  },
  activityData: foodActivities,
  infoData: []
}

export const entertainmentData: PageData = {
  bannerData: {
    bannerType: BannerType.Subpage,
    title: '',
    image: 'banners/entertainment.jpeg',
    button: 'Entertainment',
    interactive: false
  },
  desc: {
    title: '',
    type: InfoType.Secondary,
    content: 'From the adrenaline-pumping rush of ziplining through the canopy to the sophisticated quiet of our ' +
      'local art galleries, Taniti offers a diverse playground for every type of traveler. Whether you want to spend ' +
      'your morning snorkeling in crystal-clear reefs, your afternoon at the museum, or your evening hitting the ' +
      'strikes at the bowling alley and dancing at the nightclub, our entertainment options ensure your island days ' +
      'are as vibrant as our sunsets.',
    image: ''
  },
  activityData: entertainmentActivities,
  infoData: []
}

export const sightseeingData: PageData = {
  bannerData: {
    bannerType: BannerType.Subpage,
    title: '',
    image: 'banners/sightseeing.jpeg',
    button: 'Sightseeing',
    interactive: false
  },
  desc: {
    title: '',
    type: InfoType.Secondary,
    content: 'Discover the raw, natural majesty of Taniti from every possible vantage point. Whether you’re soaring ' +
      'above our active volcanic peak in a helicopter, navigating secret coastal coves by boat, or trekking through ' +
      'the emerald heart of our ancient rainforests, our sightseeing tours reveal the soul of the island. From ' +
      'leisurely bike rides through local villages to guided bus tours of our most iconic landmarks, there is a ' +
      'new wonder waiting around every corner.',
    image: ''
  },
  activityData: sightseeingActivities,
  infoData: []
}

