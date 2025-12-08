import { Component } from '@angular/core';
import { Banner, BannerData, BannerType } from "../banner/banner";
import { Info, InfoData, InfoType } from "../info/info";

@Component({
  selector: 'app-home',
  imports: [
    Banner,
    Info
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  bannerData: BannerData = {
    bannerType: BannerType.Primary,
    title: 'Taniti',
    image: 'banners/taniti.jpeg',
    button: 'Start Your Adventure',
    interactive: true,
  }

  aboutData: InfoData = {
    title: 'About the Island',
    type: InfoType.Primary,
    content: 'Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square ' +
      'miles, the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, ' +
      'lush tropical rainforests, and a mountainous interior that includes a small, active volcano. Taniti has an ' +
      'indigenous population of about 20,000. Until a recent increase in tourism, most of the Tanitian economy was ' +
      'dominated by fishing or agriculture',
    image: ''
  }

  questionsData: InfoData[] = [
    {
      title: 'What power outlets are on the Island?',
      type: InfoType.FAQ,
      content: 'Power outlets are 120 volts (the same as in the United States).',
      image: ''
    },
    {
      title: 'What is the law on alcohol sales?',
      type: InfoType.FAQ,
      content: 'Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m.',
      image: ''
    },
    {
      title: 'What is the drinking age on Taniti?',
      type: InfoType.FAQ,
      content: 'The drinking age on Taniti is 18 and the drinking age is not strictly enforced.',
      image: ''
    },
    {
      title: 'What language is spoken on Taniti?',
      type: InfoType.FAQ,
      content: 'Many younger Tanitians speak fluent English. Very little English is spoken in rural ' +
        'areas, especially by the older residents.',
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
    },
    {
      title: 'What currency is accepted on Taniti?',
      type: InfoType.FAQ,
      content: 'Taniti uses the U.S. dollar as its currency, but many businesses will also accept ' +
        'euros and yen. Several banks facilitate currency exchange, and many businesses accept major credit cards.',
      image: ''
    },
  ]
  protected readonly InfoType = InfoType;
}
