import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CajaMedianaPageRoutingModule } from './caja-mediana-routing.module';

import { CajaMedianaPage } from './caja-mediana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CajaMedianaPageRoutingModule
  ],
  declarations: [CajaMedianaPage]
})
export class CajaMedianaPageModule {}
