import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractParameterComponent } from './abstract-parameter.component';

describe('AbstractParameterComponent', () => {
  let component: AbstractParameterComponent;
  let fixture: ComponentFixture<AbstractParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
