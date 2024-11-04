import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafetyPage } from './safety.page';

import { SafetyPageRoutingModule } from './safety-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SafetyPageRoutingModule
  ],
  declarations: [SafetyPage]
})
export class SafetyPageModule {}
