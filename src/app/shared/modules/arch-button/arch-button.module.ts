import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { ArchButtonComponent } from './arch-button.component';

@NgModule({
  declarations: [ArchButtonComponent],
  exports: [ArchButtonComponent],
  imports: [MatButtonModule],
})
export class ArchButtonModule {}
