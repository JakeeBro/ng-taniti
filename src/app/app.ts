import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Footer, FooterData } from "./components/footer/footer";
import { ThemeService } from "./services/theme.service";
import {Toast} from "./components/toast/toast";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Toast],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-taniti');

  constructor(private themeService: ThemeService) {}

  footerData: FooterData = {
    lines: [
      {
        text: 'Made with Angular 21',
        link: ''
      },
      {
        text: 'Photos licensed from Adobe Stock',
        link: 'https://stock.adobe.com/'
      },
      {
        text: 'Icons by Google',
        link: 'https://fonts.google.com/icons'
      },
      {
        text: 'Jake Poshepny, 2025',
        link: 'https://jakeebro.github.io/Portfolio/about'
      }
    ]
  }

  ngOnInit() {
    this.themeService.initializeTheme();
  }
}
