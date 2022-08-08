import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings-form[form]',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss'],
})
export class SettingsFormComponent {
  @Input() form!: FormGroup;

  readonly cities = [
    'Киев',
    'Харьков',
    'Одесса',
    'Днепр',
    'Донецк',
    'Запорожье',
    'Львов',
    'Кривой Рог',
    'Севастополь',
    'Николаев',
    'Мариуполь',
    'Луганск',
    'Винница',
    'Макеевка',
    'Симферополь',
    'Херсон',
    'Чернигов',
    'Полтава',
    'Хмельницкий',
    'Черкассы',
  ];

  readonly weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  get name() {
    return this.form.get('name') as FormControl;
  }

  get dateBegin() {
    return this.form.get('date.begin') as FormControl;
  }

  get dateEnd() {
    return this.form.get('date.end') as FormControl;
  }

  get datePerpetual() {
    return this.form.get('date.isPerpetual') as FormControl;
  }

  get timeBegin() {
    return this.form.get('time.begin') as FormControl;
  }

  get timeEnd() {
    return this.form.get('time.end') as FormControl;
  }

  get timePerpetual() {
    return this.form.get('time.isPerpetual') as FormControl;
  }

  get days() {
    return this.form.get('days') as FormArray;
  }

  get city() {
    return this.form.get('city') as FormControl;
  }
}
