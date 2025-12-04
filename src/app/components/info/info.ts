import {Component, Input} from '@angular/core';

export interface InfoData {
  title?: string;
  content?: string;
}

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info {
  @Input() data?: InfoData;
}
