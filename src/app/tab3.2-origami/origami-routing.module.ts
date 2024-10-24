import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrigamiPage } from './origami.page';

const routes: Routes = [
  {
    path: '',
    component: OrigamiPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrigamiPageRoutingModule {}
