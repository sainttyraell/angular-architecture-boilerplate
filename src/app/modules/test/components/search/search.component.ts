import {Component, forwardRef, OnInit} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchComponent),
      multi: true
    }
  ]
})

export class SearchComponent implements OnInit, ControlValueAccessor {

  value: any;
  isDisabled = false;
  form: FormGroup;

  onChanged: any = () => {};
  onTouched: any = () => {};

  constructor() {
  }

  get search(): AbstractControl {
    return this.form.get('search');
  }

  ngOnInit() {
    this.form = new FormGroup({
      'search': new FormControl(null)
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
