import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TestRoutes } from './test.routes'

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(TestRoutes)],
})
export class TestRoutingModule {}
