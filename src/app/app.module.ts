import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDatepicker, MatFormField, MatDatepickerInput, MatDatepickerModule,
        MatNativeDateModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AbstractParameterComponent } from './_components/abstract-parameter/abstract-parameter.component';
import { NumberFieldWrapperComponent } from './_components/number-field-wrapper/number-field-wrapper.component';
import { StringFieldWrapperComponent } from './_components/string-field-wrapper/string-field-wrapper.component';
import { DateFieldWrapperComponent } from './_components/date-field-wrapper/date-field-wrapper.component';
import { DateRangeFieldWrapperComponent } from './_components/date-range-field-wrapper/date-range-field-wrapper.component';



@NgModule({
  declarations: [
    AppComponent,
    AbstractParameterComponent,
    NumberFieldWrapperComponent,
    StringFieldWrapperComponent,
    DateFieldWrapperComponent,
    DateRangeFieldWrapperComponent,
    MatFormField
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
