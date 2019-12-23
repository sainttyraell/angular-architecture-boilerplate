import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {ArchButtonComponent} from './arch-button.component';

@NgModule({
  imports: [MatButtonModule],
  exports: [ArchButtonComponent],
  declarations: [ArchButtonComponent]
})
export class ArchButtonModule {}
