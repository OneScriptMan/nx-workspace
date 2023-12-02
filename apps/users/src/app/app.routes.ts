import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'data',
    loadChildren: () =>
      import('@org/data-access').then((m) => m.dataAccessRoutes),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('@org/feature-users-list').then((m) => m.featureUsersListRoutes),
  },
];
