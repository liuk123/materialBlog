import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { UserComponent } from './user/user.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';

const routes: Routes = [
    { path: 'blog-home', component: BlogHomeComponent, children: [
        { path: 'blog-list', component: ArticleListComponent },
        { path: 'blog-detail', component: ArticleDetailComponent },
        { path: 'blog-user/:authId', component: UserComponent, outlet: "aux" },
    ]},
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class blogRoutingModule {}
