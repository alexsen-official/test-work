import { Component, Input } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkboxes[formArray]',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
})
export class CheckboxesComponent {
  @Input() formArray!: FormArray<FormControl>;

  @Input() options: string[] = [];
  @Input() label = '';

  onChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.formArray.push(new FormControl(event.source.value));
    } else {
      for (let i = 0; i < this.formArray.length; i++) {
        if (this.formArray.controls[i].value === event.source.value) {
          this.formArray.removeAt(i);
        }
      }
    }
  }
}
