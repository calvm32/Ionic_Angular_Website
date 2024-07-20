import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstPage } from './const.page';

const routes: Routes = [
  {
    path: '',
    component: ConstPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstPageRoutingModule {}
