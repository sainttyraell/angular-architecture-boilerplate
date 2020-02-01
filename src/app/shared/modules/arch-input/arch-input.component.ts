import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ArchInputComponent),
    },
  ],
  selector: 'app-arch-input',
  templateUrl: 'arch-input.component.html',
})
export class ArchInputComponent implements OnInit, ControlValueAccessor {
  get search(): AbstractControl {
    return this.form.get('input');
  }

  @Input() textLabel = 'Default label';
  @Input() isDisabled = false;

  form: FormGroup;

  private value: any;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  onChanged: any = () => {};

  onTouched: any = () => {};

  ngOnInit() {
    this.form = new FormGroup({
      input: new FormControl(null),
    });

    this.search.valueChanges.subscribe((val: string) => {
      this.setSearch(val);
    });
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

  setSearch(val: string) {
    if (!this.isDisabled) {
      this.onChanged(val);
      this.onTouched();
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
