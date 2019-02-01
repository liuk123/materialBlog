import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index-home',
    pathMatch: 'full'
  },
  { 
    path: 'homepage',
    redirectTo: '/index-home',
    pathMatch: 'full' },
  { 
    path: 'blog-home',
    redirectTo: '/blog-home',
    pathMatch: 'full',
  },
  { 
    path: 'person-center',
    redirectTo: '/person-center',
    pathMatch: 'full',
    // canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
