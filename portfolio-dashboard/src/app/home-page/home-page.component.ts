import { Component,OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { FormContentComponent } from "../form-content/form-content.component";
import { ChartContentComponent } from "../chart-content/chart-content.component";
import { ListContentComponent } from "../list-content/list-content.component";
import { MatTabChangeEvent } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AssetTypeTotals, InvestmentDataService, InvestmentDetails } from '../investment-data.service';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,MatTabsModule, FormContentComponent, ChartContentComponent, ListContentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  showChart=false;
  private subscription!: Subscription;
  investmentDetailsList: InvestmentDetails[] = [];
   pieChartLabels:any=[];
   pieChartDatasets:any=[];
  constructor(private investmentDataService: InvestmentDataService){}
  ngOnInit(): void {
    this.subscription = this.investmentDataService.investmentDetails$.subscribe(
      list => {
        this.investmentDetailsList = list;
        const assetTypeTotals = this.investmentDetailsList.reduce((acc, { assetType, quantity }) => {
          acc[assetType] = (acc[assetType] || 0) + quantity;
          return acc;
        }, {} as AssetTypeTotals);
         this.pieChartLabels =Object.keys(assetTypeTotals);
         this.pieChartDatasets = 
         Object.values(assetTypeTotals)
         ;
      });
  }
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    if (tabChangeEvent.index === 1) {
      this.showChart=true;
    }
    else{
      this.showChart=false;
    }
  }
  onTabActivated() {
    
  }
}
