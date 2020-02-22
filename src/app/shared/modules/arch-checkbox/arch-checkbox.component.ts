import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ArchCheckboxComponent),
    },
  ],
  selector: 'arch-checkbox',
  templateUrl: './arch-checkbox.component.html',
})
export class ArchCheckboxComponent
  implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() label = 'default label';
  @Input() labelPosition: 'before' | 'after' = 'after';
  @Input() value = false;
  @Input() isDisabled = false;

  ngOnInit(): void {}

  onCheckboxChange(value: boolean) {
    this.setCheckbox(value);
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: () => void): void {
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

  private onChanged: (value: any) => void = () => {};
  private onTouched: () => void = () => {};
}
