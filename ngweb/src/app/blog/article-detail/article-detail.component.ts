import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article, Comment } from 'src/app/domain';
import * as fromRoot from '../../reducers';
import * as actions from '../../actions/article.action';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { take, filter, map, switchMap } from 'rxjs/operators';
import { ReplayDialogComponent } from 'src/app/shared/replay-dialog/replay-dialog.component';
import { ArticleService } from 'src/app/services/article.service';
import { Subscription } from 'rxjs';
import * as RouterActions from '../../actions/router.action';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit, OnDestroy {

  article: Article
  comments: Comment[]
  liked: number
  id: string //articleId
  authId: string
  subscription: Subscription
  delSubscription: Subscription

  constructor(
      private store$: Store<fromRoot.State>,
      private routInfo: ActivatedRoute,
      private dialog: MatDialog,
      private service$: ArticleService
    ){

    //文章详情
    this.id = this.routInfo.snapshot.queryParamMap.get('id')
    this.store$.dispatch(new actions.ArticleDetailAction(this.id));
    this.store$.dispatch(new actions.CommentListAction(this.id));
    this.subscription = this.store$.pipe(
      select(fromRoot.getArticleDetailState),
      filter(v => Object.keys(v).length>0)
    ).subscribe(v => {
      this.article = v
      //初始化喜欢
      if(this.article.like.likeUser.find( id => this.authId == id )){
        this.store$.dispatch(new actions.LikeSuccessAction(1))
      }else{
        this.store$.dispatch(new actions.LikeSuccessAction(0))
      }
    })
    this.store$.pipe(select(fromRoot.getCommentListState)).subscribe(v => this.comments = v)
    this.store$.pipe(select(fromRoot.getAuthCardState)).subscribe(v => this.authId = v._id)

    //喜欢
    this.store$.pipe(select(v=>v.articleOp.like)).subscribe(v => {
      this.liked = v
    })

    //删除
    this.delSubscription = this.store$.pipe(
      select(v=>v.articleOp.delete),
      filter(v => v),
      take(1)
    ).subscribe(res =>{
      this.store$.dispatch(new RouterActions.Back())
      // this.router.navigate(['/'])
      this.store$.dispatch(new actions.DeleteArticleSuccessAction(false))
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.delSubscription.unsubscribe();
  }

  like(titleId){
    this.store$.dispatch(new actions.LikeAction({id: titleId, liked: this.liked}))
  }

  delete(id, category){
    this.store$.dispatch(new actions.DeleteArticleAction({id, category}))
  }

  openNewCommentDialog(cid = '', to = ''){
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
      this.store$.dispatch(new actions.CommentListAction(this.id));
    })
  }
}
