import { NgModule } from '@angular/core'
import { MatCheckboxModule } from '@angular/material'
import { ArchCheckboxComponent } from './arch-checkbox.component'

@NgModule({
  declarations: [ArchCheckboxComponent],
  exports: [ArchCheckboxComponent],
  imports: [MatCheckboxModule],
})
export class ArchCheckboxModule {}
