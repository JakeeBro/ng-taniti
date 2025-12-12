import {Component, Signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme',
  imports: [],
  templateUrl: './theme.html',
  styleUrl: './theme.css',
})
export class Theme {

  readonly currentTheme: Signal<string>;

  constructor(private themeService: ThemeService) {
    this.currentTheme = themeService.theme;
  }

  setTheme(theme: string) {
    this.themeService.setTheme(theme);
  }
}
