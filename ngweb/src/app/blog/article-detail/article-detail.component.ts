import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/domain';

import * as fromRoot from '../../reducers';
import * as actions from '../../actions/article.action';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  article:Article={
    title:'angular路由',
    author:'liu',
    category:'angular',
    like:{
      likeNum:10,
      likeUser:['liu2']
    },
    commentNum:12,
    visitNum:20,
    content:'dsakjdkashdkjahsdjkahskj',
    meta:{
      createAt:new Date(),
      updateAt:new Date()
    }
  }
  article$: Observable<Article>
  id: string

  constructor(private store$: Store<fromRoot.State>, private routInfo: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.id = this.routInfo.snapshot.queryParamMap.get('authId')
    this.store$.dispatch(new actions.ArticleDetailAction('id'))
    this.article$ = this.store$.pipe(
      select(fromRoot.getArticleState),
      map(v=>{
        console.log(v);
        return v
      })
    )
  }

}
