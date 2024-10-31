import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandiBaruPage } from './sandi-baru.page';

const routes: Routes = [
  {
    path: '',
    component: SandiBaruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandiBaruPageRoutingModule {}
