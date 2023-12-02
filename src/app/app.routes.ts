import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'foo',
    loadComponent: () => import('./features/foo/foo.component')
  },
  {
    path: 'bar',
    loadComponent: () => import('./features/bar/bar.component')
  },
  {
    path: 'baz',
    loadComponent: () => import('./features/baz/baz.component')
  },
  {
    path: 'todos',
    loadComponent: () => import('./features/todos/todos.component')
  },
  {
    path: 'todos-dynamic',
    loadComponent: () => import('./features/todos-dynamic/todos.component')
  },
  {
    path: 'crew-member/:id',
    loadComponent: () => import('./features/crew-members/crew-members.component')
  }
];
