import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/domain';

import * as fromRoot from '../../reducers';
import * as actions from '../../actions/article.action';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  article$: Observable<Article>
  comment$: Observable<any>
  like$: Observable<boolean>
  id: string //articleId

  constructor(private store$: Store<fromRoot.State>, private routInfo: ActivatedRoute) {
    this.id = this.routInfo.snapshot.queryParamMap.get('id')
    this.store$.dispatch(new actions.ArticleDetailAction(this.id));
    this.article$ = this.store$.pipe(select(state => state.articleDetail.articleResult))
    this.comment$ = this.store$.pipe(select(state => state.articleDetail.commentResult))
    this.like$ = this.store$.pipe(select(state => state.articleDetail.like))
  }

  ngOnInit() {
    
  }

}
