import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../reducers';
import * as actions from '../../actions/article.action';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Article } from 'src/app/domain';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  length = 100;
  pageSize = 10;

  articles$: Observable<Article[]>
  constructor(private store$: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store$.dispatch(new actions.ArticleListAction({id:'all', category: 'all', pageSize: this.pageSize, current: 0}))
    this.articles$ = this.store$.pipe(select(fromRoot.getArticleListState))
  }

  onPage(ev){
    this.store$.dispatch(new actions.ArticleListAction({id:'all', category: 'all', pageSize: ev.pageSize, current: ev.pageIndex}))
  }

}
