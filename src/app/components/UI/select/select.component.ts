import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select[control]',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() control!: FormControl;

  @Input() options: string[] = [];
  @Input() label = '';
  @Input() tooltip = '';
}
