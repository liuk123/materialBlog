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
  pageSize = 10
  id: string
  category: string
  collect: string[] = []
  isCollect: boolean
  condition:ArticleListParam

  articles$: Observable<Article[]>

  constructor(private store$: Store<fromRoot.State>, private routInfo: ActivatedRoute,private snackBar: MatSnackBar) {
    this.store$.pipe(select(fromRoot.getUserState)).subscribe(v=>{
      this.collect = v.collect
    })

    this.routInfo.queryParamMap.subscribe(v => {
      this.id = v.get('authId')
      this.category = v.get('category')
      this.isCollect = v.get('collect') == '1'
      if(this.isCollect&&this.collect.length == 0){
        this.snackBar.open('收藏为空', '关闭', {duration: 4000})
        return false
      }
      this.condition = {id: this.id, category: this.category, collect: this.isCollect?this.collect:[], pageSize: this.pageSize, current: 0}
      this.store$.dispatch(new actions.ArticleListAction(this.condition))
      this.articles$ = this.store$.pipe(select(fromRoot.getArticleListState))
    })
  }

  ngOnInit() {
    
  }

  onPage(ev){
    this.condition = {id: this.id, category: this.category, collect: this.isCollect?this.collect:[], pageSize: ev.pageSize, current: ev.pageIndex}
    this.store$.dispatch(new actions.ArticleListAction(this.condition))
  }
 
}
