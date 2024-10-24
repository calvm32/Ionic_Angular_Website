import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GaloisTheoryPage } from './galois-theory.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GaloisTheoryPageRoutingModule } from './galois-theory-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    GaloisTheoryPageRoutingModule,
  ],
  declarations: [GaloisTheoryPage],
})
export class GaloisTheoryPageModule {}
