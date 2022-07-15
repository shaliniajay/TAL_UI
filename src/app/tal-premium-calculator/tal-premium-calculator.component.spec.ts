import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalPremiumCalculatorComponent } from './tal-premium-calculator.component';

describe('TalPremiumCalculatorComponent', () => {
  let component: TalPremiumCalculatorComponent;
  let fixture: ComponentFixture<TalPremiumCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalPremiumCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalPremiumCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
