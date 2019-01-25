import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuardService } from '../services/services.module';
// import { PageNotFoundComponent } from './page-not-found';

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
  },
  
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
