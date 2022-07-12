import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBiddingPage } from './my-bidding.page';

const routes: Routes = [
  {
    path: '',
    component: MyBiddingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyBiddingPageRoutingModule {}
