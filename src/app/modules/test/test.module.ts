import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ArchButtonModule } from '../../shared/modules/arch-button/arch-button.module'
import { ArchCheckboxModule } from '../../shared/modules/arch-checkbox/arch-checkbox.module'
import { ArchInputModule } from '../../shared/modules/arch-input/arch-input.module'
import { TestComponent } from './pages/test/test.component'
import { TestRoutingModule } from './test-routing.module'

const COMPONENTS = [TestComponent]

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
  ],
})
export class TestModule {}
