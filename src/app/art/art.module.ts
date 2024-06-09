import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArtPage } from './art.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ArtPageRoutingModule } from './art-routing.module';
import { register } from 'swiper/element/bundle';

register();

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ArtPageRoutingModule,
  ],
  declarations: [ArtPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ArtPageModule {}
