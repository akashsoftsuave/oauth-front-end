import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { OAuthSuccessComponent } from './oauth-success-component/oauth-success-component';
import { LoginGuard } from './login.guard';
import { AuthGuard } from './auth.guard';

    export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login').then(m => m.Login),
    canActivate: [LoginGuard]
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard').then(m => m.Dashboard),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'oauth-success', component: OAuthSuccessComponent }
];
    