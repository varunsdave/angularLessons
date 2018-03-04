import { Component, OnInit } from '@angular/core';
import { mockUiParameters } from '../../_mocks/mockUiParameters';
@Component({
  selector: 'abstract-parameter',
  templateUrl: './abstract-parameter.component.html',
  styleUrls: ['./abstract-parameter.component.css']
})
export class AbstractParameterComponent implements OnInit {

  private _uiParameters: {} [];
  constructor() { }

  ngOnInit() {
      this._uiParameters = mockUiParameters;
  }

  

}
