import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartContentComponent } from './chart-content.component';

describe('ChartContentComponent', () => {
  let component: ChartContentComponent;
  let fixture: ComponentFixture<ChartContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
