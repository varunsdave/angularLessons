import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberFieldWrapperComponent } from './number-field-wrapper.component';

describe('NumberFieldWrapperComponent', () => {
  let component: NumberFieldWrapperComponent;
  let fixture: ComponentFixture<NumberFieldWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberFieldWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberFieldWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
