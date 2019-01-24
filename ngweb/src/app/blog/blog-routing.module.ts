import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { UserComponent } from './user/user.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { AuthGuardService } from '../services/services.module';

const routes: Routes = [
    { path: 'blog-home', component: BlogHomeComponent, children: [
        { path: 'blog-list', component: ArticleListComponent },
        { path: 'blog-detail', component: ArticleDetailComponent },
        { path: 'blog-user/:authId', component: UserComponent, outlet: "aux" },
    ]},
    { path: 'edit-article', component: EditArticleComponent, canActivate: [AuthGuardService]}
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class blogRoutingModule {}
