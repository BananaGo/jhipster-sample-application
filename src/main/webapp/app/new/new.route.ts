import { Route } from '@angular/router';

import { NewComponent } from './new.component';

export const SOME_NEW_COMPONENT_ROUTE: Route = {
  path: '',
  component: NewComponent,
  data: {
    authorities: []
  }
};
