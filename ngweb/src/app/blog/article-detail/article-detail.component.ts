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

  article: Article
  comment: any
  liked: number = 0
  id: string //articleId

  constructor(private store$: Store<fromRoot.State>, private routInfo: ActivatedRoute) {
    this.id = this.routInfo.snapshot.queryParamMap.get('id')
    this.store$.dispatch(new actions.ArticleDetailAction(this.id));
    this.store$.pipe(select(fromRoot.getArticleDetailState)).subscribe(v => {
      this.article = v.articleResult
      this.comment = v.commentResult
      this.liked = v.liked
    })
    this.store$.pipe(select(fromRoot.getLikeState)).subscribe(v => {
      this.liked = v

      console.log(this.liked)
    })
  }

  ngOnInit() {
  }

  like(titleId){
    this.store$.dispatch(new actions.LikeAction({id: titleId, liked: this.liked}))
  }
}
