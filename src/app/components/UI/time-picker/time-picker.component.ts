import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LeadingZeroPipe } from 'src/app/pipes';

@Component({
  selector: 'app-time-picker[control]',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent implements AfterViewInit, OnDestroy {
  @Input() control!: FormControl;

  @Input() label = 'Время';

  @ViewChild('timePicker') timePicker!: ElementRef;
  @ViewChild('hoursPicker') hoursPicker!: ElementRef;
  @ViewChild('minutesPicker') minutesPicker!: ElementRef;

  isVisible = false;

  readonly time = new Date();
  readonly minutesStep = 15;

  readonly hours = [...Array(24).keys()];
  readonly minutes = [...Array(60).keys()].filter(
    (minute) => minute % this.minutesStep === 0
  );

  private readonly _listeners: any[] = [];
  private readonly _subscription = new Subscription();

  constructor(private readonly _elementRef: ElementRef) {}

  openPopup(element: HTMLInputElement) {
    this.isVisible = !this.isVisible;
    element.classList.add('ng-touched');
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: Event) {
    const { nativeElement } = this._elementRef;

    if (!nativeElement.contains(event.target)) {
      this.isVisible = false;
    }
  }

  ngAfterViewInit() {
    for (const { nativeElement } of [this.minutesPicker, this.hoursPicker]) {
      const callback = () => {
        const value = Math.floor(
          nativeElement.scrollTop /
            Math.floor(
              nativeElement.scrollHeight / nativeElement.children.length
            )
        );

        if (nativeElement === this.minutesPicker.nativeElement) {
          this.time.setMinutes(value * this.minutesStep);
        } else {
          this.time.setHours(value);
        }

        this.control.setValue(this.time);
      };

      nativeElement.addEventListener('scroll', callback, { passive: true });
      this._listeners.push({ scroll: callback });
    }

    this._subscription.add(
      this.control.valueChanges.subscribe({
        next: (value) => {
          const { transform } = new LeadingZeroPipe();

          let hh = transform(value.getHours());
          let mm = transform(value.getMinutes());

          this.timePicker.nativeElement.value = `${hh}:${mm}`;
        },
        error: (error) => {
          console.error(error.message);
        },
      })
    );
  }

  ngOnDestroy() {
    for (const key in this._listeners) {
      removeEventListener(key, this._listeners[key]);
    }

    this._subscription.unsubscribe();
  }
}
