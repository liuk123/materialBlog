import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { UserComponent } from './user/user.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { AuthListComponent } from './auth-list/auth-list.component';

const routes: Routes = [
    { path: 'blog-home', component: BlogHomeComponent, children: [
        { path: '', component: ArticleListComponent },
        { path: ':authId', component: UserComponent, outlet: "aux" },

        { path: 'blog-list', component: ArticleListComponent },
        { path: 'auth-list', component: AuthListComponent },
        { path: 'blog-detail', component: ArticleDetailComponent },
        { path: 'blog-user/:authId', component: UserComponent, outlet: "aux" },
    ]},
    { path: 'edit-article', component: EditArticleComponent},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class blogRoutingModule {}
