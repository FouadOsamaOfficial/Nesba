import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateMarketComponent } from './real-estate-market.component';

describe('RealEstateMarketComponent', () => {
  let component: RealEstateMarketComponent;
  let fixture: ComponentFixture<RealEstateMarketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealEstateMarketComponent]
    });
    fixture = TestBed.createComponent(RealEstateMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
