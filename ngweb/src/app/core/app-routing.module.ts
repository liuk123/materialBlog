import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PageNotFoundComponent } from './page-not-found';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'homepage', redirectTo: '/index-home', pathMatch: 'full' },
  { path: 'blog-home', redirectTo: '/blog-home', pathMatch: 'full' },
  
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
