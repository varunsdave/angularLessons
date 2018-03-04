import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFieldWrapperComponent } from './date-field-wrapper.component';

describe('DateFieldWrapperComponent', () => {
  let component: DateFieldWrapperComponent;
  let fixture: ComponentFixture<DateFieldWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateFieldWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFieldWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
