import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.page.html',
  styleUrls: ['./shops.page.scss'],
})
export class ShopsPage implements OnInit {

  shops: Array<any> = [
    {
      address: "c/ añaña",
      telephone: "654654546546"
    },{
      address: "c/ bebebeb",
      telephone: "68478435"
    },{
      address: "c/ dededed",
      telephone: "687346"
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
