import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';
import { ArchCheckboxComponent } from './arch-checkbox.component';

@NgModule({
  declarations: [ArchCheckboxComponent],
  exports: [ArchCheckboxComponent],
  imports: [MatCheckboxModule, ReactiveFormsModule, FormsModule],
})
export class ArchCheckboxModule {}
