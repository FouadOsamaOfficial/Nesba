import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestFinanceProductsComponent } from './guest-finance-products.component';

describe('GuestFinanceProductsComponent', () => {
  let component: GuestFinanceProductsComponent;
  let fixture: ComponentFixture<GuestFinanceProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestFinanceProductsComponent]
    });
    fixture = TestBed.createComponent(GuestFinanceProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
