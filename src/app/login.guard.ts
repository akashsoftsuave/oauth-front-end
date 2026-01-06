import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpService } from './http';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private httpService: HttpService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.httpService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
      return false;
    }

    return true;
  }
}
