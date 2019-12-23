import {NgModule} from '@angular/core';
import {TestComponent} from './pages/test/test.component';
import {TestRoutingModule} from './test-routing.module';
import {ArchCheckboxModule} from '../../shared/modules/arch-checkbox/arch-checkbox.module';
import {ArchButtonModule} from '../../shared/modules/arch-button/arch-button.module';
import {SearchComponent} from './components/search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

const COMPONENTS = [
  TestComponent,
  SearchComponent
];

@NgModule({
  imports: [TestRoutingModule, ArchCheckboxModule, ArchButtonModule, ReactiveFormsModule, FormsModule, CommonModule],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class TestModule {}
