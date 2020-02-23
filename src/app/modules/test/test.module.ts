import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchButtonModule } from '@app/shared/modules/arch-button/arch-button.module';
import { ArchCheckboxModule } from '@app/shared/modules/arch-checkbox/arch-checkbox.module';
import { ArchInputModule } from '@app/shared/modules/arch-input/arch-input.module';
import { TranslateModule } from '@ngx-translate/core';
import { TestComponent } from './pages/test/test.component';
import { TestRoutingModule } from './test-routing.module';

const COMPONENTS = [TestComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    TestRoutingModule,
    ArchCheckboxModule,
    ArchButtonModule,
    ArchInputModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TranslateModule,
  ],
})
export class TestModule {}
