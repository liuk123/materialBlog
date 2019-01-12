import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../reducers';
import * as actions from '../../actions/article.action';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Article } from 'src/app/domain';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  articles$: Observable<Article[]>
  constructor(private store$: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store$.dispatch(new actions.ArticleListAction({id:'all', category: 'all'}))
    this.articles$ = this.store$.pipe(select(fromRoot.getArticleListState))
  }

}
