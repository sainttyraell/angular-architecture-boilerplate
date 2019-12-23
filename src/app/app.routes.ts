import {Routes} from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'test',
    loadChildren: './modules/test/test.module#TestModule'
  }
];
