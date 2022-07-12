import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyBiddingPageRoutingModule } from './my-bidding-routing.module';

import { MyBiddingPage } from './my-bidding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyBiddingPageRoutingModule
  ],
  declarations: [MyBiddingPage]
})
export class MyBiddingPageModule {}
