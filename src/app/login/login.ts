import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginWithGoogle() {
    window.location.href = 'http://localhost:3000/auth/google   ';
  }
  loginWithGitHub() {
    window.location.href = 'http://localhost:3000/auth/github';
  }
}
