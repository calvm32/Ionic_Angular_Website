import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConstPage } from './const.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ConstPageRoutingModule } from './const-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ConstPageRoutingModule,
  ],
  declarations: [ConstPage],
})
export class ConstPageModule {}
