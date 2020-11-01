import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  @Input()
  products;

  @Output()
  selection: EventEmitter<any> = new EventEmitter<any>();

  displayedColumns: string[] = ['name', 'price', 'action'];

  ngOnInit(): void {
    console.log(this.products);
  }

  delete(product) {
    this.selection.emit(product);
  }

  getTotalCost() {
    return this.products
      .map((t) => t.acf.price)
      .reduce((acc, value) => acc + value, 0);
  }
}
