import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifikasiEmailPage } from './verifikasi-email.page';

const routes: Routes = [
  {
    path: '',
    component: VerifikasiEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifikasiEmailPageRoutingModule {}
