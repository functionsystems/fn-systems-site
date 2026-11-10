import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.routes').then((m) => m.ABOUT_ROUTES),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/products.routes').then((m) => m.PRODUCTS_ROUTES),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./features/services/services.routes').then((m) => m.SERVICES_ROUTES),
  },
  {
    path: 'contact',
    loadChildren: () => import('./features/contact/contact.routes').then((m) => m.CONTACT_ROUTES),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./features/not-found/not-found.routes').then((m) => m.NOT_FOUND_ROUTES),
  },

  // Redirect to not-found page
  {
    path: '**',
    loadChildren: () =>
      import('./features/not-found/not-found.routes').then((m) => m.NOT_FOUND_ROUTES),
  }
];
