import { Injectable, signal, WritableSignal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ThemeService {

  themes: string[] = [
    'theme-light',
    'theme-dark'
  ]

  private themeSignal: WritableSignal<string> = signal<string>('');
  readonly theme = this.themeSignal.asReadonly();

  initializeTheme() {
    const savedTheme = localStorage.getItem('theme') ?? 'theme-dark';

    let initialTheme;

    if (savedTheme && this.themes.includes(savedTheme)) {
      initialTheme = savedTheme;
    } else {
      initialTheme = this.themes[0];
    }

    this.setTheme(initialTheme);
  }

  setTheme(newTheme: string) {

    if (!this.themes.includes(newTheme)) {
      console.error(`THEME SERVICE: Invalid Theme: ${newTheme}`);
      return;
    }

    this.clearTheme()

    this.themeSignal.set(newTheme);
    this.applyTheme(this.theme());

    // Logs
    console.log('THEME SERVICE: Theme Set: ' + this.theme());
  }

  applyTheme(theme: string) {
    if (this.themes.includes(theme) && theme) {
      document.documentElement.classList.add(this.theme());
      localStorage.setItem('theme', this.theme());
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

    this.themeSignal.set('');
    localStorage.setItem('theme', '');

    // If any Themes were cleared, Log
    if (count > 0) {
      console.log('THEME SERVICE: Theme Cleared');
    }
  }

  logTheme() {
    console.log('THEME SERVICE: Current Theme: ' + this.theme());
  }
}