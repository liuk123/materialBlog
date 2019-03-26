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
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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
  isCollected: boolean

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
      if(this.article.like && this.article.like.likeUser.find( id => this.authId == id )){
        this.store$.dispatch(new actions.LikeSuccessAction(1))
      }else{
        this.store$.dispatch(new actions.LikeSuccessAction(0))
      }
    })
    this.store$.pipe(select(fromRoot.getCommentListState)).subscribe(v => this.comments = v)
    this.store$.pipe(select(fromRoot.getAuthCardState)).subscribe(v => {
      this.authId = v._id
      if(v.collect&&v.collect.collect&&v.collect.collect.length>0){
        this.isCollected = v.collect.collect.find(v=>this.id ==v)?true:false
      }
    })

    //点击喜欢
    this.store$.pipe(select(v=>v.articleOp.like)).subscribe(v => {
      this.liked = v
    })
    //点击收藏
    this.store$.pipe(select(v=>v.articleOp.collectArticle)).subscribe(v => {
      if(v.collect&&v.collect.length>0){
        this.isCollected = v.collect.find(v=>this.id == v)?true:false
      }else if(v.collect){
        this.isCollected=false
      }
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

  like(likeId){
    if(this.article&&this.article.like){
      this.store$.dispatch(new actions.LikeAction({id: likeId, liked: this.liked}))
    }else{//如果article中的like为空时
      this.store$.dispatch(new actions.LikeAction({id: likeId, liked: 2}))
    }
  }

  collect(id){ //文章id
    this.store$.dispatch(new actions.CollectArticleAction({id, isCollected: this.isCollected}))
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
