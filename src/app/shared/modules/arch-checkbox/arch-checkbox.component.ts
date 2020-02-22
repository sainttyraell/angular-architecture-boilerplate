import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Subscription } from 'rxjs';

@AutoUnsubscribe()
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ArchCheckboxComponent),
    },
  ],
  selector: 'app-arch-checkbox',
  templateUrl: './arch-checkbox.component.html',
})
export class ArchCheckboxComponent
  implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() label = 'default label';

  get checkbox(): AbstractControl {
    return this.form.get('checkbox');
  }

  form = new FormGroup({ checkbox: new FormControl(false) });
  isDisabled = false;

  private valueChangesSubscription: Subscription;
  private value: boolean;

  ngOnInit(): void {
    this.valueChangesSubscription = this.checkbox.valueChanges.subscribe(
      (value: boolean) => {
        this.setCheckbox(value);
      }
    );
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: boolean): void {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  setCheckbox(value: boolean) {
    if (!this.isDisabled) {
      this.onChanged(value);
      this.onTouched();
    }
  }

  ngOnDestroy(): void {}

  private onChanged: any = () => {};
  private onTouched: any = () => {};
}
