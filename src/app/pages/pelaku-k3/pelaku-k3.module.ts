import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PelakuK3PageRoutingModule } from './pelaku-k3-routing.module';

import { PelakuK3Page } from './pelaku-k3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PelakuK3PageRoutingModule
  ],
  declarations: [PelakuK3Page]
})
export class PelakuK3PageModule {}
