import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalFinanceComponent } from './personal-finance.component';

describe('PersonalFinanceComponent', () => {
  let component: PersonalFinanceComponent;
  let fixture: ComponentFixture<PersonalFinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalFinanceComponent]
    });
    fixture = TestBed.createComponent(PersonalFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
