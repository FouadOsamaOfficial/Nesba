import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldDocumentsComponent } from './old-documents.component';

describe('OldDocumentsComponent', () => {
  let component: OldDocumentsComponent;
  let fixture: ComponentFixture<OldDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldDocumentsComponent]
    });
    fixture = TestBed.createComponent(OldDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
