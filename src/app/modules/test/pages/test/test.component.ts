import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as validators from '../../../../core/validators';
import { ButtonColorEnum } from '../../../../shared/modules/arch-button/enum/button-color.enum';
import { ButtonTypeEnum } from '../../../../shared/modules/arch-button/enum/button-type.enum';

@Component({
  selector: 'arch-test-component',
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      active: new FormControl(true),
      name: new FormControl(null),
      search: new FormControl(null, {
        validators: [Validators.required, validators.Digit()],
      }),
    });
  }

  submit(): void {}

  get ButtonColorEnum() {
    return ButtonColorEnum;
  }

  get ButtonTypeEnum() {
    return ButtonTypeEnum;
  }
}
