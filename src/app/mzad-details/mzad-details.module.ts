import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MzadDetailsPageRoutingModule } from './mzad-details-routing.module'; 

import { MzadDetailsPage } from './mzad-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    MzadDetailsPageRoutingModule
  ],
  declarations: [MzadDetailsPage]
})
export class MzadDetailsPageModule {}
