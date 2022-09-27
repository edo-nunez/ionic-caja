import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CajitaPage } from './cajita.page';

const routes: Routes = [
  {
    path: '',
    component: CajitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CajitaPageRoutingModule {}
