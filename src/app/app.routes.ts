import { Routes } from '@angular/router'

export const AppRoutes: Routes = [
  {
    loadChildren: () =>
      import('./modules/test/test.module').then(m => m.TestModule),
    path: 'test',
  },
]
