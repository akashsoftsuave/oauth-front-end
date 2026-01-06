import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost:3000';
   googleLogin(): Observable<any> {
    return this.http.get(`${this.baseUrl}/auth/google`);
  }
}
