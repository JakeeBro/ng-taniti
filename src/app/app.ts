import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Footer, FooterData } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-taniti');

  footerData: FooterData = {
    lines: [
      {
        text: 'Photos licensed from Adobe Stock',
        link: 'fake link'
      },
      {
        text: 'Made with Angular 21',
        link: ''
      },
      {
        text: '2025',
        link: ''
      }
    ]
  }
}
