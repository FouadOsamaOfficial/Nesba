import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateIntroductionComponent } from './rate-introduction.component';

describe('RateIntroductionComponent', () => {
  let component: RateIntroductionComponent;
  let fixture: ComponentFixture<RateIntroductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RateIntroductionComponent]
    });
    fixture = TestBed.createComponent(RateIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
