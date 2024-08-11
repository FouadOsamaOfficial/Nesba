import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestInvestmentComponent } from './guest-investment.component';

describe('GuestInvestmentComponent', () => {
  let component: GuestInvestmentComponent;
  let fixture: ComponentFixture<GuestInvestmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestInvestmentComponent]
    });
    fixture = TestBed.createComponent(GuestInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
