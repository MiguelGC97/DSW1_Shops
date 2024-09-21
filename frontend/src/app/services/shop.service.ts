import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  endpoint = `http://localhost:8080/api/shops`;

  constructor(private httpClient: HttpClient) { }

  getShops() {
    return this.httpClient.get(this.endpoint);
  }
}
