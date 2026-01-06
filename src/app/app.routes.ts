import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { OAuthSuccessComponent } from './oauth-success-component/oauth-success-component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', component: Login },
    {path: 'dashboard', component: Dashboard },
    { path: 'oauth-success', component: OAuthSuccessComponent }

];
