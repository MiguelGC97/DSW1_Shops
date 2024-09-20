import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.page.html',
  styleUrls: ['./shops.page.scss'],
})
export class ShopsPage implements OnInit {

  shops: any = []
  
  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.getAllShops();
  }

  getAllShops() {
    this.shopService.getShops().subscribe(response => {
      this.shops = response;
    });
  }
}
