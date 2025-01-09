import { Component } from '@angular/core';
import { TuiNavigation } from '@taiga-ui/layout';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  TuiDropdown,
  TuiDataList
} from '@taiga-ui/core';

@Component({
  selector: 'app-side-bar',
  imports: [TuiNavigation, RouterLink, RouterLinkActive, TuiDropdown, TuiDataList],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})

export class SideBarComponent {
  protected expanded = false;
  protected readonly routes: any = {};

}
