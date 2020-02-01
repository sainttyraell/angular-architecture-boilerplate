import { Component, Input } from '@angular/core'
import { MatButton } from '@angular/material'

@Component({
  selector: 'app-arch-button',
  templateUrl: './arch-button.component.html',
})
export class ArchButtonComponent extends MatButton {
  @Input()
  isDisabled = false
}
