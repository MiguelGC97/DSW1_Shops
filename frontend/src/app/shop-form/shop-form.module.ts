import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopFormPageRoutingModule } from './shop-form-routing.module';

import { ShopFormPage } from './shop-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ShopFormPageRoutingModule
  ],
  declarations: [ShopFormPage]
})
export class ShopFormPageModule {}
