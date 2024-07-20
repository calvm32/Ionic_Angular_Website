import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../tab1-home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../tab2-about/about.module').then((m) => m.AboutPageModule),
      },
      {
        path: 'math',
        loadChildren: () =>
          import('../tab3-math/math.module').then((m) => m.MathPageModule),
      },
      {
        path: 'math/constructions',
        loadChildren: () =>
          import('../tab3.1-const/const.module').then((m) => m.ConstPageModule),
      },
      {
        path: 'math/question',
        loadChildren: () =>
          import('../tab3.2-problem/problem.module').then((m) => m.ProblemPageModule),
      },
      {
        path: 'math/research',
        loadChildren: () =>
          import('../tab3.3-research/research.module').then(
            (m) => m.ResearchPageModule,
          ),
      },
      {
        path: 'art',
        loadChildren: () =>
          import('../tab4-art/art.module').then((m) => m.ArtPageModule),
      },
      {
        path: 'art/origami',
        loadChildren: () =>
          import('../tab4.1-origami/origami.module').then((m) => m.OrigamiPageModule),
      },
      {
        path: 'art/traditional',
        loadChildren: () =>
          import('../tab4.2-traditional/traditional.module').then((m) => m.TraditionalPageModule),
      },
      {
        path: 'photos',
        loadChildren: () =>
          import('../tab5-photos/photos.module').then((m) => m.PhotosPageModule),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
