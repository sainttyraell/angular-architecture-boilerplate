import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material';
import { ButtonColorEnum } from './enum/button-color.enum';
import { ButtonStyleEnum } from './enum/button-style.enum';
import { ButtonTypeEnum } from './enum/button-type.enum';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'arch-button',
  templateUrl: './arch-button.component.html',
})
export class ArchButtonComponent {
  @Input()
  isDisabled = false;

  @Input()
  color: ThemePalette = ButtonColorEnum.BASIC as ThemePalette;

  @Input()
  textLabel = 'Default label';

  @Input()
  buttonType = ButtonTypeEnum.BUTTON;

  @Input()
  buttonStyle = ButtonStyleEnum.BASIC;

  get ButtonStyleEnum() {
    return ButtonStyleEnum;
  }
}
