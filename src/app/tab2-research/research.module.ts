import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResearchPage } from './research.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ResearchPageRoutingModule } from './research-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ResearchPageRoutingModule,
  ],
  declarations: [ResearchPage],
})
export class ResearchPageModule {}
