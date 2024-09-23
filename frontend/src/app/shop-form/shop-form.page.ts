import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.page.html',
  styleUrls: ['./shop-form.page.scss'],
})
export class ShopFormPage implements OnInit {

  shopForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private shopService: ShopService,
    private route: Router) {
      this.shopForm = this.formBuilder.group({
        address: ['', Validators.compose([Validators.required])],
        telephone: ['', Validators.compose([Validators.required])],
      })
    }

  ngOnInit() {
  }

  createShop() {
    if (this.shopForm.valid) {
      console.log('Valid form:', this.shopForm.value);
      this.shopService.create(this.shopForm.value).subscribe(response => {
        this.route.navigateByUrl("/shops");
      })
    } else {
      console.log('Form not valid');
    }
  }

  getFormControl(field: string) {
    return this.shopForm.get(field);
  }
}
