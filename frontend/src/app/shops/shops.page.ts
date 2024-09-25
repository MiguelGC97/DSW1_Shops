import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.page.html',
  styleUrls: ['./shops.page.scss'],
})
export class ShopsPage implements OnInit {

  shops: any = [];
  editShopId: number | null = null;
  editForm: FormGroup;
  
  constructor(private shopService: ShopService, 
              private router: Router,
              private formBuilder: FormBuilder
  ) {
    // Inicializar el formulario de edición
    this.editForm = this.formBuilder.group({
      address: ['', Validators.required],
      telephone: ['', Validators.required],
    });
  }

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

  deleteShop(id: any) {
    this.shopService.delete(id).subscribe(response => {
      this.getAllShops(); //Para que refresque la página
    })
  }

  // Habilitar la edición de una tienda
  enableEdit(shopId: number, shop: any) {
    this.editShopId = shopId;
    // Rellenar el formulario con los datos actuales de la tienda
    this.editForm.patchValue({
      address: shop.address,
      telephone: shop.telephone,
    });
  }

  // Enviar el formulario de edición
  submitEdit(id: number) {
    console.log("Submit button clicked");  // Para verificar si se hace clic en el botón

    if (this.editForm.valid) {
      const updatedData = this.editForm.value;
      this.shopService.update(id, updatedData).subscribe(response => {
        console.log('Shop updated:', response);
        this.editShopId = null; // Para que se cierre el formulario de editar
        this.getAllShops(); //Para que refresque la página
      });
    } else {
      console.log('Form is not valid');
    }
  }

  /*updateShop(shop: any) {
    this.shopService.update(shop).subscribe(response => {
      this.getAllShops();
    })
  }*/

  
}
