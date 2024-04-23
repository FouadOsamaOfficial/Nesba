import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousFundingComponent } from './previous-funding.component';

describe('PreviousFundingComponent', () => {
  let component: PreviousFundingComponent;
  let fixture: ComponentFixture<PreviousFundingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousFundingComponent]
    });
    fixture = TestBed.createComponent(PreviousFundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
