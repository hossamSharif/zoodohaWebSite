import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MzadSubescribePage } from './mzad-subescribe.page';

const routes: Routes = [
  {
    path: '',
    component: MzadSubescribePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MzadSubescribePageRoutingModule {}
