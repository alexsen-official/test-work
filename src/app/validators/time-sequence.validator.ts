import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const TimeSequenceValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const error = { incorrectTimeSequence: true };

  const beginControl = control.get('time.begin');
  const endControl = control.get('time.end');

  if (!beginControl?.value || !endControl?.value) {
    return null;
  }

  if (beginControl.value.getTime() >= endControl.value.getTime()) {
    beginControl.setErrors(error);
    endControl.setErrors(error);

    return error;
  }

  beginControl.setErrors(null);
  endControl.setErrors(null);

  return null;
};
