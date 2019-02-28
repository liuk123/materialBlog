import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index-home/(blog-list)',
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
  },
  { 
    path: 'nav',
    redirectTo: '/navigation-home',
    pathMatch: 'full',
  },
  { path: 'searchbox', component: SearchComponent, outlet: 'popup' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
