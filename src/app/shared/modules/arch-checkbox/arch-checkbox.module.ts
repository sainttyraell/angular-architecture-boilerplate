import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';
import { ArchCheckboxComponent } from './arch-checkbox.component';

@NgModule({
  declarations: [ArchCheckboxComponent],
  exports: [ArchCheckboxComponent],
  imports: [MatCheckboxModule, ReactiveFormsModule],
})
export class ArchCheckboxModule {}
