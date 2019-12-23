import {Routes} from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'test',
    loadChildren: () => import('./modules/test/test.module').then(m => m.TestModule)
  }
];
