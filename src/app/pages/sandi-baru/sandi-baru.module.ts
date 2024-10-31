import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SandiBaruPageRoutingModule } from './sandi-baru-routing.module';

import { SandiBaruPage } from './sandi-baru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SandiBaruPageRoutingModule
  ],
  declarations: [SandiBaruPage]
})
export class SandiBaruPageModule {}
