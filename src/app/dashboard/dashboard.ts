import { Component } from '@angular/core';
import { HttpService } from '../http';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  constructor(private httpService: HttpService) {}

  logout() {
    this.httpService.logout();
    window.location.href = '/login';
  }
}
