import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PelakuK3Page } from './pelaku-k3.page';

const routes: Routes = [
  {
    path: '',
    component: PelakuK3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PelakuK3PageRoutingModule {}
