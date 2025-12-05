import {Component, Input} from '@angular/core';

export enum InfoType {
  Primary,
  Secondary,
  FAQ
}

export interface InfoData {
  title?: string;
  type?: InfoType;
  content?: string;
  image?: string;
}

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info {
  @Input() data?: InfoData;
  @Input() width?: number;
  protected readonly InfoType = InfoType;
}
