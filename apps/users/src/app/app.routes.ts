import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'users',
    loadChildren: () =>
      import('@org/feature-users-list').then((m) => m.featureUsersListRoutes),
  },
];
