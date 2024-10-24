import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TraditionalPage } from './traditional.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TraditionalPageRoutingModule } from './traditional-routing.module';
import { register } from 'swiper/element/bundle';

register();

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TraditionalPageRoutingModule,
  ],
  declarations: [TraditionalPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TraditionalPageModule {}
