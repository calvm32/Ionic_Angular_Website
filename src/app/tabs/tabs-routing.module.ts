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
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'math',
        loadChildren: () => import('../math/math.module').then(m => m.MathPageModule),
      },
      {
        path: 'math/constructions',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'math/question',
        loadChildren: () => import('../tab7/tab7.module').then(m => m.Tab7PageModule)
      },
      {
        path: 'math/research',
        loadChildren: () => import('../tab8/tab8.module').then(m => m.Tab8PageModule)
      },
      {
        path: 'art',
        loadChildren: () => import('../art/art.module').then(m => m.ArtPageModule)
      },
      {
        path: 'photos',
        loadChildren: () => import('../photos/photos.module').then(m => m.PhotosPageModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
