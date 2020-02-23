import { TranslateResolver } from '@app/core/services/translate';
import { TestComponent } from './pages/test/test.component';

export const TestRoutes = [
  {
    component: TestComponent,
    data: {
      i18n: ['test'],
    },
    path: '',
    resolve: [TranslateResolver],
  },
];
