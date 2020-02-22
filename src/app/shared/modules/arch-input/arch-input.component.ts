import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
      useExisting: forwardRef(() => ArchInputComponent),
    },
  ],
  selector: 'arch-input',
  templateUrl: 'arch-input.component.html',
})
export class ArchInputComponent
  implements OnInit, OnDestroy, ControlValueAccessor {
  get input(): AbstractControl {
    return this.form.get('input');
  }

  @Input() textLabel = 'Default label';
  @Input() isDisabled = false;

  form: FormGroup;

  private valueChangesSubscription: Subscription;
  private value: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.form = new FormGroup({
      input: new FormControl(null),
    });

    this.valueChangesSubscription = this.input.valueChanges.subscribe(
      (val: string) => {
        this.setInput(val);
      }
    );
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: string): void {
    this.value = obj;
  }

  setInput(value: string): void {
    if (!this.isDisabled) {
      this.onChanged(value);
      this.onTouched();
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnDestroy(): void {}

  private onChanged: any = () => {};
  private onTouched: any = () => {};
}
