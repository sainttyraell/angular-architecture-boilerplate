import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arch-button',
  templateUrl: './arch-button.component.html',
})
export class ArchButtonComponent {
  @Input()
  isDisabled = false;

  @Input()
  color: 'primary' | 'accent' | 'warn' = 'primary';
}
