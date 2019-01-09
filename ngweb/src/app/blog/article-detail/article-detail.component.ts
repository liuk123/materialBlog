import { Component, OnInit } from '@angular/core';
import { Article, Comment } from 'src/app/domain';

import * as fromRoot from '../../reducers';
import * as actions from '../../actions/article.action';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { take, filter, map, switchMap, mergeMap } from 'rxjs/operators';
import { ReplayDialogComponent } from 'src/app/shared/replay-dialog/replay-dialog.component';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  article: Article
  comments: Comment[]
  liked: number = 0
  id: string //articleId

  constructor(
      private store$: Store<fromRoot.State>,
      private routInfo: ActivatedRoute,
      private dialog: MatDialog,
      private service$: ArticleService 
    ){

    //文章详情
    this.id = this.routInfo.snapshot.queryParamMap.get('id')
    this.store$.dispatch(new actions.ArticleDetailAction(this.id));
    this.store$.pipe(select(fromRoot.getArticleDetailState)).subscribe(v => {
      this.article = v.articleResult
      this.comments = v.commentResult
      this.liked = v.liked
      console.log(JSON.stringify(v))
    })

    //喜欢
    // this.store$.pipe(select(fromRoot.getLikeState)).subscribe(v => this.liked = v)

    //删除
    // this.store$.pipe(select(fromRoot.getDeleteArticleState)).subscribe(res =>
    //   console.log(res)//删除文章
    // )
  }

  ngOnInit() {
  }

  like(titleId){
    this.store$.dispatch(new actions.LikeAction({id: titleId, liked: this.liked}))
  }

  delete(id, category){
    this.store$.dispatch(new actions.DeleteArticleAction({id, category}))
  }

  openNewCommentDialog(cid,to){
    const dialogRef = this.dialog.open(
      ReplayDialogComponent,
      {data: { title: '评论' }}
    )
    dialogRef.afterClosed().pipe(
      take(1),
      filter(n => n),
      map(content => ({
        content,
        cid,
        to,
        title: this.article._id,
      })),
      switchMap(v => this.service$.reply(v))
    ).subscribe(res => {
      console.log(res)
    })
  }
}
