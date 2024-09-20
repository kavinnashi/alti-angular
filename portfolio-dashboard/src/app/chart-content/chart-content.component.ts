import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild,input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { InvestmentDataService, InvestmentDetails , AssetTypeTotals} from '../investment-data.service';
import { Subscription,async, of, switchMap } from 'rxjs';
import { Chart, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-chart-content',
  standalone: true,
  imports: [CommonModule,BaseChartDirective],
  templateUrl: './chart-content.component.html',
  styleUrl: './chart-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChartContentComponent implements OnInit {
  @Input() pieChartDatasets!: any[];
  @Input() pieChartLabels!: any[];
  chart: any = [];
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor(private investmentDataService: InvestmentDataService){
    Chart.register(...registerables);
  }
ngOnInit(): void {
  console.log("da")
  this.chart = new Chart('char-id', {
    type: 'line',
    data: {
      labels: this.pieChartLabels,
      datasets: [
        {
          data: this.pieChartDatasets,
          borderColor: '#3e95cd',
          fill: false,
          label: 'Investment Details',
          backgroundColor: 'rgba(93, 175, 89, 0.1)',
          borderWidth: 3,
        },
      ],
    },
  });   
    } 

  }


