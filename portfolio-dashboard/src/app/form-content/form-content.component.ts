import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormControl } from '@angular/forms';
import {InvestmentDataService} from '../investment-data.service'
@Component({
  selector: 'app-form-content',
  standalone: true,
  imports: [ ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule],
  templateUrl: './form-content.component.html',
  styleUrl: './form-content.component.scss'
})
export class FormContentComponent implements OnInit {
  investmentForm: FormGroup;
  constructor(private investmentDataService: InvestmentDataService){
    this.investmentForm = new FormGroup({
      assetType: new FormControl(''),
      quantity: new FormControl(''),
      purchasePrice: new FormControl(''),
      purchaseDate: new FormControl('')
    });
  }
ngOnInit(): void {
  
}
onSubmit() {
  console.log(this.investmentForm.value);
  this.investmentDataService.updateInvestmentDetails(this.investmentForm.value);
  this.investmentForm.reset();
}
}
