import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';

import HomeComponent from "./home-layout/home.component";

@Component({
  selector: 'app-root',
  imports: [TuiRoot, HomeComponent, TuiRoot],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'avant_frontend';
}
