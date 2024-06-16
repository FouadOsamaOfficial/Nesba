import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageFinanceComponent } from './mortgage-finance.component';

describe('MortgageFinanceComponent', () => {
  let component: MortgageFinanceComponent;
  let fixture: ComponentFixture<MortgageFinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MortgageFinanceComponent]
    });
    fixture = TestBed.createComponent(MortgageFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
