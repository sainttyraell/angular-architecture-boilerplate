import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-arch-checkbox',
  templateUrl: './arch-checkbox.component.html',
})
export class ArchCheckboxComponent {}
