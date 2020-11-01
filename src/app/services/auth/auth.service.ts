import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { tap } from 'rxjs/operators';
import { shareReplay } from 'rxjs/operators';
import { User } from '../../models/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: localStorage.getItem('token'),
    }),
  };

  login(username: string, password: string) {
    this.isLoggedIn();
    return this.http
      .post(`${environment.apiUrl}/jwt-auth/v1/token`, { username, password })
      .pipe(tap((res) => this.setSession(res), shareReplay()));
  }

  private setSession(authResult): void {
    localStorage.setItem('token', authResult.token);
  }

  register(user: User) {
    this.login(user.username, user.password);
    return this.http.post(`${environment.apiUrl}/wp/v2/users/register`, user);
  }

  logout(): void {
    this.isLoggedOut();
    localStorage.removeItem('token');
    localStorage.removeItem('order');
    localStorage.removeItem('products');
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  isLoggedIn(): boolean {
    return true;
  }
}
