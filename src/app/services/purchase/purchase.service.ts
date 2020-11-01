import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class PucharseService {
  constructor(
    private http: HttpClient,
    private auth: AuthService
    ) {}

  /**
   * Create two separete arrays, one for storing objects, one for storing the ids of the products
   */
  order: number[] = [];
  items = [];

  products = JSON.parse(localStorage.getItem('products'));
  listItems = JSON.parse(localStorage.getItem('order'));

  createShoppingCart() {
    if (this.products.length > 0) {
      let existintingEntries = JSON.parse(localStorage.getItem('order'));
      console.log(existintingEntries);
    } else {
      localStorage.setItem('order', JSON.stringify(this.order));
      localStorage.setItem('products', JSON.stringify(this.items));
    }
  }

  addItemToOrder(item) {
    this.order.push(item.id);
    this.items.push(item);
    localStorage.setItem('order', JSON.stringify(this.order));
    localStorage.setItem('products', JSON.stringify(this.items));
  }

  getProducts() {
    return this.products;
  }

  getList() {
    return this.listItems;
  }

  removeItemFromOrder(product) {
    const index: number = this.order.indexOf(product.id);
    if (index !== -1) {
      this.order.splice(index, 1);
      this.products.splice(index,1);
    }
    localStorage.setItem('products', JSON.stringify(this.items));
    localStorage.setItem('order', JSON.stringify(this.order));
  }

  placeOrder(title, status, fields){
    return this.http.post(`${environment.apiUrl}/wp/v2/purchase`, { title, status, fields }, this.auth.httpOptions);
  }
}
