import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CajaGrandePageRoutingModule } from './caja-grande-routing.module';

import { CajaGrandePage } from './caja-grande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CajaGrandePageRoutingModule
  ],
  declarations: [CajaGrandePage]
})
export class CajaGrandePageModule {}
