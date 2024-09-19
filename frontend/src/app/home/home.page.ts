import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

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

  constructor() {}

}
