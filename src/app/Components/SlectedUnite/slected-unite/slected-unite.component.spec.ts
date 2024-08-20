import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlectedUniteComponent } from './slected-unite.component';

describe('SlectedUniteComponent', () => {
  let component: SlectedUniteComponent;
  let fixture: ComponentFixture<SlectedUniteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlectedUniteComponent]
    });
    fixture = TestBed.createComponent(SlectedUniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
