import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription,async } from 'rxjs';
import { CommonModule } from '@angular/common';
import { InvestmentDataService, InvestmentDetails } from '../investment-data.service';
@Component({
  selector: 'app-list-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-content.component.html',
  styleUrl: './list-content.component.scss'
})
export class ListContentComponent {
  private subscription!: Subscription;
  investmentDetailsList: InvestmentDetails[] = [];
constructor(private investmentDataService: InvestmentDataService){}

ngOnInit() {
  this.subscription = this.investmentDataService.investmentDetails$.subscribe(
    list => {
      this.investmentDetailsList = list;
    }
  );
}
ngOnDestroy() {
  this.subscription && this.subscription.unsubscribe();
}
}
