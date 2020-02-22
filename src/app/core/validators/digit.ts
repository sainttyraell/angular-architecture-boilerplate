import { AbstractControl, ValidatorFn } from '@angular/forms';

export const Digit = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: boolean } => {
    return null;
  };
};
