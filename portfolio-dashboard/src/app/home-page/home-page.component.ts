import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { FormContentComponent } from "../form-content/form-content.component";
import { ChartContentComponent } from "../chart-content/chart-content.component";
import { ListContentComponent } from "../list-content/list-content.component";
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MatTabsModule, FormContentComponent, ChartContentComponent, ListContentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
