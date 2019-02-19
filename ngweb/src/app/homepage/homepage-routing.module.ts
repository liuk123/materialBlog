import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexHomeComponent } from './index-home/index-home.component';
import { BlogComponent } from './blog/blog.component';
import { AuthListComponent } from './auth-list/auth-list.component';

const routes: Routes = [
    { path: 'index-home', component: IndexHomeComponent, children: [
        { path: 'blog-list', component: BlogComponent },
        { path: 'auth-list', component: AuthListComponent },
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class homepageRoutingModule {}
