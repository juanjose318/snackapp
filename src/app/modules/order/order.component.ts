import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PucharseService } from 'src/app/services/purchase/purchase.service';

@Component({
  selector: 'app-modal-order',
  templateUrl: './order.component.html',
  styleUrls: ['order.component.scss'],
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  fields: FormGroup;
  isAuthenticated;
  products = this.orderService.getProducts();
  list = this.orderService.order;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private orderService: PucharseService,
    private router: Router
  ) {
    this.orderForm = this.formBuilder.group({
      title: ['', Validators.required],
      status: ['', Validators.required],
      fields: this.formBuilder.group({
        address: ['', Validators.required],
        product: ['', Validators.required],
        description: ['', Validators.required],
      }),
    });
    if (this.authService.isLoggedIn) {
      this.isAuthenticated = true;
    }
  }

  ngOnInit() {
    this.authService.isLoggedIn();
    this.orderService.getProducts();
    this.patchInfo();
  }

  handleDelete(event) {
    console.log(event);
    this.orderService.removeItemFromOrder(event);
  }

  patchInfo() {
    this.orderForm.patchValue({
      title: 'Order ' + Math.floor(Math.random() * 10001),
      status: 'publish',
      fields: {
        product: this.orderService.getList()
      },
    });
  }

  confirmOrder() {
    const val = this.orderForm.value;
    console.log(val);
    if (val.title && val.status && val.fields) {
      this.orderService.placeOrder(val.title, val.status, val.fields)
      .subscribe(() => {
        console.log('order placed');
        this.router.navigate(['/']);
      }
        );
    }
  }
}
