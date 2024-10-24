import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectsPage } from './projects.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ProjectsPageRoutingModule } from './projects-routing.module';
import { register } from 'swiper/element/bundle';

register();

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProjectsPageRoutingModule,
  ],
  declarations: [ProjectsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectsPageModule {}
