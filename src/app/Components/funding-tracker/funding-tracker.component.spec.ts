import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingTrackerComponent } from './funding-tracker.component';

describe('FundingTrackerComponent', () => {
  let component: FundingTrackerComponent;
  let fixture: ComponentFixture<FundingTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundingTrackerComponent]
    });
    fixture = TestBed.createComponent(FundingTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
