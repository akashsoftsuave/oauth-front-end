import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http';

@Component({
  template: '<p>Logging in...</p>'
})
export class OAuthSuccessComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get('token');

    if (token) {
      this.httpService.setToken(token);
      this.router.navigate(['/dashboard']);
    }
  }
}
  