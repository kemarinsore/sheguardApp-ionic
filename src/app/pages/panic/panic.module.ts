import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanicPage } from './panic.page';
import { PanicPageRoutingModule } from './panic-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PanicPageRoutingModule
  ],
  declarations: [PanicPage]
})
export class PanicPageModule {}
