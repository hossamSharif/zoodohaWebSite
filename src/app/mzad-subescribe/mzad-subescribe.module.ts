import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MzadSubescribePageRoutingModule } from './mzad-subescribe-routing.module';

import { MzadSubescribePage } from './mzad-subescribe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MzadSubescribePageRoutingModule
  ],
  declarations: [MzadSubescribePage]
})
export class MzadSubescribePageModule {}
