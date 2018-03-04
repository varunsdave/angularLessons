import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringFieldWrapperComponent } from './string-field-wrapper.component';

describe('StringFieldWrapperComponent', () => {
  let component: StringFieldWrapperComponent;
  let fixture: ComponentFixture<StringFieldWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringFieldWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringFieldWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
