import {NgModule} from '@angular/core';
import {TestComponent} from './pages/test/test.component';
import {TestRoutingModule} from './test-routing.module';
import {ArchCheckboxModule} from '../../shared/modules/arch-checkbox/arch-checkbox.module';
import {ArchButtonModule} from '../../shared/modules/arch-button/arch-button.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ArchSearchModule} from '../../shared/modules/arch-search/arch-search.module';

const COMPONENTS = [
  TestComponent
];

@NgModule({
  imports: [
    TestRoutingModule,
    ArchCheckboxModule,
    ArchButtonModule,
    ArchSearchModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class TestModule {}
