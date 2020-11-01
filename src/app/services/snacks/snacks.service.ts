import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SnacksService {
  constructor(private http: HttpClient) {}

  getBurgers(): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}/wp/v2/burger`)
      .pipe(map((data: Response) => data));
  }

  getHotdogs(): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}/wp/v2/hotdog`)
      .pipe(map((data: Response) => data));
  }

  getSandwichs(): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}/wp/v2/sandwich`)
      .pipe(map((data: Response) => data));
  }

  getDrinks(): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}/wp/v2/drank`)
      .pipe(map((data: Response) => data));
  }

  getSelection(selection) {

  }
}
