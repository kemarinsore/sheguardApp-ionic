import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifikasiEmailPageRoutingModule } from './verifikasi-email-routing.module';

import { VerifikasiEmailPage } from './verifikasi-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifikasiEmailPageRoutingModule
  ],
  declarations: [VerifikasiEmailPage]
})
export class VerifikasiEmailPageModule {}
