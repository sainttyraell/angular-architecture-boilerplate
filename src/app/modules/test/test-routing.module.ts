import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestRoutes } from './test.routes';

@NgModule({
  imports: [RouterModule.forChild(TestRoutes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
