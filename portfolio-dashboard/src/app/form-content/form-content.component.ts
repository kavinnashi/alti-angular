import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormControl } from '@angular/forms';
import {InvestmentDataService} from '../investment-data.service'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form-content',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,
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
      assetType: new FormControl('',Validators.required),
      quantity: new FormControl('',Validators.required),
      purchasePrice: new FormControl('',Validators.required),
      purchaseDate: new FormControl('',Validators.required)
    });
    
    
  }
  get formControls() {
    return this.investmentForm.controls;
  }
  get isAssetTypeInvalid() {
    const control = this.formControls['assetType'];
    return control.touched && control.hasError('required');
  }
  get isQuantityInvalid() {
    const control = this.formControls['quantity'];
    return control.touched && control.hasError('required');
  }
  get isPurchasePriceInvalid() {
    const control = this.formControls['purchasePrice'];
    return control.touched && control.hasError('required');
  }
  
  get isPurchaseDateInvalid() {
    const control = this.formControls['purchaseDate'];
    return control.touched && control.hasError('required');
  }
ngOnInit(): void {
  
}

onSubmit() {
  if (this.investmentForm.valid) {
    this.investmentDataService.updateInvestmentDetails(this.investmentForm.value);
    this.markAllAsTouched(this.investmentForm);
    this.investmentForm.reset({
      assetType: '',
      quantity: '',
      purchasePrice: '',
      purchaseDate: ''
    });
  } else {
    // If the form is not valid, mark all controls as touched so that validation errors will be shown
    this.markAllAsTouched(this.investmentForm);
  }
}
private markAllAsTouched(group: FormGroup) {
  Object.values(group.controls).forEach(control => {
    control.markAsTouched();

    if (control instanceof FormGroup) {
      this.markAllAsTouched(control);
    }
  });
}
  
}

