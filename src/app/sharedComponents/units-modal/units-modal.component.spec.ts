import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsModalComponent } from './units-modal.component';

describe('UnitsModalComponent', () => {
  let component: UnitsModalComponent;
  let fixture: ComponentFixture<UnitsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitsModalComponent]
    });
    fixture = TestBed.createComponent(UnitsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
