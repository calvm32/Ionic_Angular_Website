import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchPage } from './research.page';

const routes: Routes = [
  {
    path: '',
    component: ResearchPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResearchPageRoutingModule {}
