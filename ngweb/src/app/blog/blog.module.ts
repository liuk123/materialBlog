import { NgModule } from '@angular/core';
import { blogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { UserComponent } from './user/user.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

@NgModule({
  declarations: [
    BlogHomeComponent,
    UserComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    EditArticleComponent,
  ],
  imports: [
    blogRoutingModule,
    SharedModule,
  ],
})
export class BlogModule { }
