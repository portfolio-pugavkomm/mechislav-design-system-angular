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
  {
    path: 'typography',
    loadComponent: () => import('./routes/typography/typography').then(c => c.Typography),
  },
  {
    path: 'inputs',
    loadComponent: () => import('./routes/inputs/inputs').then(c => c.Inputs),
  }
]
