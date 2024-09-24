import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  endpoint = `http://localhost:8080/api/shops`;

  constructor(private httpClient: HttpClient) { }

  getShops() {
    return this.httpClient.get(this.endpoint);
  }

  /*create(shopData: any) {
    return this.httpClient.post(this.endpoint, shopData);
  }*/

  create(shopData: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("address", shopData.address);
    body.append("telephone", shopData.telephone);

    return this.httpClient.post(this.endpoint, body.toString(), { headers });
  }

  delete(id: any){
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

  update(id: any, updatedData: any){
    return this.httpClient.put(`${this.endpoint}/${id}`, updatedData);
  }
}
