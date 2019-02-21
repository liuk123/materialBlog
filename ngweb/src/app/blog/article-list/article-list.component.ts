import { Component, OnInit } from '@angular/core';
import { Article, ArticleListParam } from 'src/app/domain';

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

  length = 100
  pageSize = 10
  id: string
  category: string
  collect: string

  articles$: Observable<Article[]>

  constructor(private store$: Store<fromRoot.State>, private routInfo: ActivatedRoute) {

    this.routInfo.queryParamMap.subscribe(v => {
      this.id = v.get('authId')
      this.category = v.get('category')
      this.collect = v.get('collect')
      let condition:ArticleListParam
      if(this.collect == '1'){//收藏
        condition = {id: this.id, collect: this.collect, pageSize: this.pageSize, current: 0}
      }else{//分类
        condition = {id: this.id, category: this.category, pageSize: this.pageSize, current: 0}
      }
      this.store$.dispatch(new actions.ArticleListAction(condition))
      this.articles$ = this.store$.pipe(select(fromRoot.getArticleListState))
    })
    
  }

  ngOnInit() {
  }

  onPage(ev){
    this.store$.dispatch(new actions.ArticleListAction({id: this.id, category: this.category, pageSize: ev.pageSize, current: ev.pageIndex}))
  }
 
}
