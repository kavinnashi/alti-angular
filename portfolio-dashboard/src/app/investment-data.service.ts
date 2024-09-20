import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface InvestmentDetails {
  assetType: string;
  quantity: number;
  purchasePrice: number;
  purchaseDate: Date | string;
}
export interface AssetTypeTotals {
  [key: string]: number;
}
@Injectable({
  providedIn: 'root'
})
export class InvestmentDataService {
  private investmentDetailsSource = new BehaviorSubject<InvestmentDetails[]>([]);
  investmentDetails$ = this.investmentDetailsSource.asObservable();

  constructor() {}

  updateInvestmentDetails(details: InvestmentDetails) {
    const currentList = this.investmentDetailsSource.getValue();
    this.investmentDetailsSource.next([...currentList, details]);
  }

  clearInvestmentDetails() {
    this.investmentDetailsSource.next([]);
  }
}
