import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraditionalPage } from './traditional.page';

const routes: Routes = [
  {
    path: '',
    component: TraditionalPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraditionalPageRoutingModule {}
