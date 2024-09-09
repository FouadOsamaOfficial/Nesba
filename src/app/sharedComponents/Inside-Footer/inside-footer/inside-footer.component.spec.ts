import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideFooterComponent } from './inside-footer.component';

describe('InsideFooterComponent', () => {
  let component: InsideFooterComponent;
  let fixture: ComponentFixture<InsideFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsideFooterComponent]
    });
    fixture = TestBed.createComponent(InsideFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
