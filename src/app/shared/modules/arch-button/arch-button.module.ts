import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { ArchButtonComponent } from './arch-button.component';

@NgModule({
  declarations: [ArchButtonComponent],
  exports: [ArchButtonComponent],
  imports: [MatButtonModule, CommonModule],
})
export class ArchButtonModule {}
