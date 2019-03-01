import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index-home',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    redirectTo: '/index-home'
  },
  {
    path: 'index',
    redirectTo: '/blog-home/(blog-list//aux:blog-user/)?category=all'
  },
  {
    path: 'person-center',
    redirectTo: '/person-center',
    pathMatch: 'full',
  },
  {
    path: 'nav',
    redirectTo: '/navigation-home(popup:searchbox)',
  },
  // {
  //   path: '**',
  //   redirectTo: '/notfound',
  // },
  
];

const childRoutes: Routes = [
  { path: 'searchbox', component: SearchComponent, outlet: 'popup' },
  { path: 'notfound', component:PageNotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
