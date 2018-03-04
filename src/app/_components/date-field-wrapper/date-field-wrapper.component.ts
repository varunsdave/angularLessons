import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'date-field-wrapper',
  templateUrl: './date-field-wrapper.component.html',
  styleUrls: ['./date-field-wrapper.component.css']
})
export class DateFieldWrapperComponent implements OnInit {

  myDate = new Date();
  constructor() { }

  ngOnInit() {
  }

}
