import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopFormPage } from './shop-form.page';

const routes: Routes = [
  {
    path: '',
    component: ShopFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopFormPageRoutingModule {}
