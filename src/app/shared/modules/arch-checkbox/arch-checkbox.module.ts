import {NgModule} from '@angular/core';
import {MatCheckboxModule} from '@angular/material';
import {ArchCheckboxComponent} from './arch-checkbox.component';

@NgModule({
  imports: [MatCheckboxModule],
  exports: [ArchCheckboxComponent],
  declarations: [ArchCheckboxComponent]
})
export class ArchCheckboxModule {}
