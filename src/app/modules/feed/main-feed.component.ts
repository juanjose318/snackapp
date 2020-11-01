import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PucharseService } from 'src/app/services/purchase/purchase.service';
import { SnacksService } from '../../services/snacks/snacks.service';

@Component({
  selector: 'app-main-feed',
  templateUrl: 'main-feed.component.html',
  styleUrls: ['./main-feed.component.scss'],
})
export class MainFeedComponent implements OnInit {
  burgers;
  hotdogs;
  drinks;
  sandwichs;

  order: number[];

  panelOpenState = false;

  constructor(
    private snacksService: SnacksService,
    public auth: AuthService,
    private purchaseService : PucharseService
    ) {}

  ngOnInit() {
    this.snacksService.getBurgers().subscribe((data: Response) => {
      this.burgers = data;
    });
    this.snacksService.getHotdogs().subscribe((data: Response) => {
      this.hotdogs = data;
    });
    this.snacksService.getSandwichs().subscribe((data: Response) => {
      this.sandwichs = data;
    });
    this.snacksService.getDrinks().subscribe((data: Response) => {
      this.drinks = data;
    });

    this.purchaseService.createShoppingCart();
  }

  addItemToCart(event){
    this.purchaseService.addItemToOrder(event);
  }
}
