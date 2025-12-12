import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ScreenService {

  private readonly breakpoint = 1080;

  isDesktop = signal(window.innerWidth > this.breakpoint);

  constructor() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize() {
    this.isDesktop.set(window.innerWidth > this.breakpoint);
  }
}