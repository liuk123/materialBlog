import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/domain';

import * as fromRoot from '../../reducers';
import * as actions from '../../actions/article.action';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles$: Observable<Article>

  constructor(private store$: Store<fromRoot.State>) {
    
    this.store$.dispatch(new actions.ArticleListAction('5c2c85fb2fb4032a3848e319'))
    this.articles$ = this.store$.pipe(
      select(fromRoot.getArticleState),
      // map(v=>{
      //   console.log(v);
      //   return v
      // })
    )
  }

  ngOnInit() {
  }

}
