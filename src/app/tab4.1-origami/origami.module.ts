import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrigamiPage } from './origami.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { OrigamiPageRoutingModule } from './origami-routing.module';
import { register } from 'swiper/element/bundle';

register();

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    OrigamiPageRoutingModule,
  ],
  declarations: [OrigamiPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OrigamiPageModule {}
