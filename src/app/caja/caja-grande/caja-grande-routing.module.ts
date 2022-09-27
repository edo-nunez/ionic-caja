import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CajaGrandePage } from './caja-grande.page';

const routes: Routes = [
  {
    path: '',
    component: CajaGrandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CajaGrandePageRoutingModule {}
