import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  shops: any = [
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

  constructor(private router: Router) { }

  gotoShops() {
    this.router.navigateByUrl("/shops");
  }

}
