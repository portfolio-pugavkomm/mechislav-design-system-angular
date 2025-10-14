import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'buttons',
    loadComponent: () => import('./routes/buttons/buttons').then(c => c.Buttons)
  },
  {
    path: 'tags',
    loadComponent: () => import('./routes/tags/tags').then(c => c.Tags),
  },
]
