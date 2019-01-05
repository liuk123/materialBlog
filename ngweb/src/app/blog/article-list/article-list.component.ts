import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/domain';

import * as fromRoot from '../../reducers';
import * as actions from '../../actions/article.action';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles$: Observable<Article[]>

  constructor(private store$: Store<fromRoot.State>, private routInfo: ActivatedRoute) {

    this.routInfo.queryParamMap.subscribe(v => {
      this.store$.dispatch(new actions.ArticleListAction({id: v.get('authId'), category: v.get('category')}))
      this.articles$ = this.store$.pipe(select(fromRoot.getArticleListState))
    })
  }

  ngOnInit() {
  }

}
