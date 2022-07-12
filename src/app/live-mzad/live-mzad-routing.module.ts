import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveMzadPage } from './live-mzad.page';

const routes: Routes = [
  {
    path: '',
    component: LiveMzadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveMzadPageRoutingModule {}
