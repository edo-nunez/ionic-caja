import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CajaMedianaPage } from './caja-mediana.page';

const routes: Routes = [
  {
    path: '',
    component: CajaMedianaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CajaMedianaPageRoutingModule {}
