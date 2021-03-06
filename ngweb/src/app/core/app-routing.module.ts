import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    redirectTo: '/blog-home/(aux:)?category=all',
  },
  {
    path: 'person-center',
    redirectTo: '/person-center',
    pathMatch: 'full',
  },
  {
    path: 'nav',
    redirectTo: '/navigation-home',
  },
  {
    path: 'login',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'register',
    redirectTo: '/register',
    pathMatch: 'full',
  },
];

const childRoutes: Routes = [
  { path: '**', component:PageNotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
