import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppRoutes } from './app.routes'

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(AppRoutes)],
})
export class AppRoutingModule {}
