import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-picker[control]',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  @Input() control!: FormControl;

  @Input() label = 'Дата';

  @Input() min: Date | null = null;
  @Input() max: Date | null = null;
}
