import { Component, Input } from '@angular/core';

export interface FooterLine {
  text?: string;
  link?: string;
}

export interface FooterData {
  lines?: FooterLine[];
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  @Input() footerData?: FooterData;
}
