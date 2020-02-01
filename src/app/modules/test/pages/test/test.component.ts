import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonColorEnum } from '../../../../shared/modules/arch-button/enum/button-color.enum';

@Component({
  selector: 'app-test-component',
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      search: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
  }

  submit(): void {}

  get ButtonColorEnum() {
    return ButtonColorEnum;
  }
}
