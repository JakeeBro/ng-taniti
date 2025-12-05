import { Component } from '@angular/core';

@Component({
  selector: 'app-theme',
  imports: [],
  templateUrl: './theme.html',
  styleUrl: './theme.css',
})
export class Theme {
  themes: string[] = [
    'theme-light',
    'theme-dark'
  ]

  currentTheme: string = '';

  ngOnInit() {

    // Reload Saved Theme
    this.currentTheme = localStorage.getItem('theme') ?? '';

    if (this.currentTheme === '') {
      this.currentTheme = this.themes[0];
    }

    console.log('Theme Loaded: ' + this.currentTheme);

    if (this.currentTheme) {
      this.setTheme(this.currentTheme);
    }
  }

  clearTheme() {
    // Variable to Optionally Print the Clear Statement if there was anything to Clear
    let count = 0;

    // Checks to see if any defined Theme is applied, and Removes it if so
    this.themes.forEach(theme => {
      if (document.documentElement.classList.contains(theme)) {
        document.documentElement.classList.remove(theme);
        count++;
      }
    })

    // Clears the Local Copy
    this.currentTheme = '';

    // Sets the Local Storage
    localStorage.setItem('theme', '');

    // If any Themes were cleared, Log
    if (count > 0) {
      console.log('Theme Cleared');
    }
  }

  setTheme(newTheme: string) {

    // Clears the Current Theme
    this.clearTheme()

    // Sets the Local Copy to the new theme
    this.currentTheme = newTheme;

    // Applies the new Theme and saves to to Local Storage
    document.documentElement.classList.add(this.currentTheme);
    localStorage.setItem('theme', newTheme);

    // Logs
    console.log('Theme Set: ' + this.currentTheme);
  }

  debug() {
    console.log('Current Theme: ' + this.currentTheme);
  }
}
