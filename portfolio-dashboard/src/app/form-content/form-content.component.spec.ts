import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormContentComponent } from './form-content.component';

describe('InvestmentFormComponent', () => {
  let component: FormContentComponent;
  let fixture: ComponentFixture<FormContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormContentComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule, // Needed for mat-select
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate asset type as required', () => {
    const assetTypeControl = component.investmentForm.controls['assetType'];
    expect(assetTypeControl.valid).toBeFalsy();
    assetTypeControl.setValue('stocks');
    expect(assetTypeControl.valid).toBeTruthy();
  });

  it('should validate quantity as required', () => {
    const quantityControl = component.investmentForm.controls['quantity'];
    expect(quantityControl.valid).toBeFalsy();
    quantityControl.setValue(10);
    expect(quantityControl.valid).toBeTruthy();
  });

  it('should validate purchase price as required', () => {
    const purchasePriceControl = component.investmentForm.controls['purchasePrice'];
    expect(purchasePriceControl.valid).toBeFalsy();
    purchasePriceControl.setValue(100);
    expect(purchasePriceControl.valid).toBeTruthy();
  });

  it('should validate purchase date as required', () => {
    const purchaseDateControl = component.investmentForm.controls['purchaseDate'];
    expect(purchaseDateControl.valid).toBeFalsy();
    purchaseDateControl.setValue(new Date());
    expect(purchaseDateControl.valid).toBeTruthy();
  });

  it('should not submit the form if it is invalid', () => {
    spyOn(component, 'onSubmit');
    const formElement = fixture.debugElement.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });

  it('should submit the form if it is valid', () => {
    spyOn(component, 'onSubmit');
    component.investmentForm.controls['assetType'].setValue('stocks');
    component.investmentForm.controls['quantity'].setValue(10);
    component.investmentForm.controls['purchasePrice'].setValue(100);
    component.investmentForm.controls['purchaseDate'].setValue(new Date());
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });
});
