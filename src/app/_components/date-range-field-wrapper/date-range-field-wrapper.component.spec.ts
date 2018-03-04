import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangeFieldWrapperComponent } from './date-range-field-wrapper.component';

describe('DateRangeFieldWrapperComponent', () => {
  let component: DateRangeFieldWrapperComponent;
  let fixture: ComponentFixture<DateRangeFieldWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateRangeFieldWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRangeFieldWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
