import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CajitaPageRoutingModule } from './cajita-routing.module';

import { CajitaPage } from './cajita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CajitaPageRoutingModule
  ],
  declarations: [CajitaPage]
})
export class CajitaPageModule {}
