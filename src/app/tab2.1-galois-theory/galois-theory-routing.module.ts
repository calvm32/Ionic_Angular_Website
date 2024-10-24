import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaloisTheoryPage } from './galois-theory.page';

const routes: Routes = [
  {
    path: '',
    component: GaloisTheoryPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaloisTheoryPageRoutingModule {}
