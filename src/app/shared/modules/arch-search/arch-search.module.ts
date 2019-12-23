import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ArchSearchComponent} from './arch-search.component';

const COMPONENTS = [
  ArchSearchComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
  providers: [],
})
export class ArchSearchModule {
}
