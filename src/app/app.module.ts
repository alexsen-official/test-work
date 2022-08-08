import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {
  CardComponent,
  CheckboxesComponent,
  DatePickerComponent,
  SelectComponent,
  SettingsFormComponent,
  StepperComponent,
  TimePickerComponent,
} from './components';
import { MaterialModule, RoutingModule } from './modules';
import { HoursPipe, LeadingZeroPipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CheckboxesComponent,
    DatePickerComponent,
    SelectComponent,
    SettingsFormComponent,
    StepperComponent,
    TimePickerComponent,

    HoursPipe,
    LeadingZeroPipe,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
