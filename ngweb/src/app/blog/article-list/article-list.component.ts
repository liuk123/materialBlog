import { Component, OnInit } from '@angular/core';
import { Article, ArticleListParam } from 'src/app/domain';

import * as fromRoot from '../../reducers';
import * as actions from '../../actions/article.action';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  length = 100
  pageSize = 9
  id: string
  category: string
  collect: string
  condition:ArticleListParam

  articles$: Observable<Article[]>

  constructor(private store$: Store<fromRoot.State>, private routInfo: ActivatedRoute,private snackBar: MatSnackBar) {

    this.routInfo.queryParamMap.subscribe(v => {
      this.id = v.get('authId')
      this.category = v.get('category')
      this.collect = v.get('collect')

      this.condition = {id: this.id, category: this.category, collect: this.collect, pageSize: this.pageSize, current: 0}
      this.store$.dispatch(new actions.ArticleListAction(this.condition))
      this.articles$ = this.store$.pipe(select(fromRoot.getArticleListState))
    })
  }

  ngOnInit() { }

  onPage(ev){
    this.condition = {id: this.id, category: this.category, collect: this.collect, pageSize: ev.pageSize, current: ev.pageIndex}
    this.store$.dispatch(new actions.ArticleListAction(this.condition))
  }
 
}
