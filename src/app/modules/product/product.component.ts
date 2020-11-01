import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/interfaces/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductCardComponent {
  @Input()
  product: Product;

  @Output()
  selection: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  selectProduct(product) {
    this.selection.emit(product);
  }
}
