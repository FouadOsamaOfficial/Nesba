import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoLeaseFinanceComponent } from './auto-lease-finance.component';

describe('AutoLeaseFinanceComponent', () => {
  let component: AutoLeaseFinanceComponent;
  let fixture: ComponentFixture<AutoLeaseFinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoLeaseFinanceComponent]
    });
    fixture = TestBed.createComponent(AutoLeaseFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
