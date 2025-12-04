import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import {Theme} from "../theme/theme";

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLinkActive,
    RouterLink,
    Theme
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
