import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TimeSequenceValidator } from 'src/app/validators';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  readonly settingsForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      date: new FormGroup({
        begin: new FormControl(null, [Validators.required]),
        end: new FormControl(null, [Validators.required]),
        isPerpetual: new FormControl(false, []),
      }),
      time: new FormGroup({
        begin: new FormControl(null, [Validators.required]),
        end: new FormControl(null, [Validators.required]),
        isPerpetual: new FormControl(false, []),
      }),
      days: new FormArray<FormControl>([]),
      city: new FormControl('', [Validators.required]),
    },
    { validators: TimeSequenceValidator }
  );

  readonly steps = ['Настройки баннера', 'Контент'];
}
