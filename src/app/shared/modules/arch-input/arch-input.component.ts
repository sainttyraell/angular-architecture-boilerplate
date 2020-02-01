import { Component, forwardRef, OnInit } from '@angular/core'
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms'

@Component({
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
  value: any
  isDisabled = false
  form: FormGroup

  get search(): AbstractControl {
    return this.form.get('input')
  }

  onChanged: any = () => {}

  onTouched: any = () => {}

  ngOnInit() {
    this.form = new FormGroup({
      input: new FormControl(null),
    })

    this.search.valueChanges.subscribe((val: string) => {
      this.setSearch(val)
    })
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  writeValue(obj: string): void {
    this.value = obj
  }

  setSearch(val: string) {
    if (!this.isDisabled) {
      this.onChanged(val)
      this.onTouched()
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }
}
