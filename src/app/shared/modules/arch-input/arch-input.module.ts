import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material'
import { ArchInputComponent } from './arch-input.component'

const COMPONENTS = [ArchInputComponent]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatInputModule],
  providers: [],
})
export class ArchInputModule {}
