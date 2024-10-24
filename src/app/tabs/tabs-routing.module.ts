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
        path: 'research',
        loadChildren: () =>
          import('../tab2-research/research.module').then((m) => m.ResearchPageModule),
      },
      {
        path: 'research/galois-theory',
        loadChildren: () =>
          import('../tab2.1-galois-theory/galois-theory.module').then((m) => m.GaloisTheoryPageModule),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('../tab3-projects/projects.module').then((m) => m.ProjectsPageModule),
      },
      {
        path: 'projects/constructions',
        loadChildren: () =>
          import('../tab3.1-const/const.module').then(
            (m) => m.ConstPageModule,
          ),
      },
      {
        path: 'projects/origami',
        loadChildren: () =>
          import('../tab3.2-origami/origami.module').then((m) => m.OrigamiPageModule),
      },
      {
        path: 'projects/problem',
        loadChildren: () =>
          import('../tab3.3-problem/problem.module').then((m) => m.ProblemPageModule),
      },
      {
        path: 'projects/photos',
        loadChildren: () =>
          import('../tab3.4-photos/photos.module').then((m) => m.PhotosPageModule),
      },
      {
        path: 'projects/traditional',
        loadChildren: () =>
          import('../tab3.5-traditional/traditional.module').then((m) => m.TraditionalPageModule),
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
