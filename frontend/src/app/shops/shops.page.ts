import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.page.html',
  styleUrls: ['./shops.page.scss'],
})
export class ShopsPage implements OnInit {

  shops: any = []
  
  constructor(private shopService: ShopService, 
              private router: Router) { }

  ngOnInit() {
    this.getAllShops();
  }

  getAllShops() {
    this.shopService.getShops().subscribe(response => {
      this.shops = response;
    });
  }

  gotoShopForm() {
    this.router.navigateByUrl("/shop-form");
  }
}
