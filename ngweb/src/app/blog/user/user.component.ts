import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/domain';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as actions from '../../actions/auth.action';
import * as ArticleActions from '../../actions/article.action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  authId: string//作者id 可以是其他作者
  isCollected: boolean //是否已经关注
  auth:User//本人
  user:User//文章作者

  constructor(
    private store$: Store<fromRoot.State>,
    private routInfo: ActivatedRoute
    ) {
      this.routInfo.paramMap.subscribe(m=>{
        this.authId = m.get('authId')
        this.store$.dispatch(new actions.UserCardAction(this.authId))
      })
      this.store$.pipe(select(fromRoot.getUserState)).subscribe(v=>{
        this.user = v
      })
      this.store$.pipe(select(fromRoot.getAuthState)).subscribe(v=>{
        this.auth = v
        if(this.auth.collectUser&&this.auth.collectUser.collect&&this.auth.collectUser.collect.length>0){
          this.isCollected = this.auth.collectUser.collect.find(v=>this.authId ==v)?true:false
        }
      })
      //点击关注
      this.store$.pipe(select(v=>v.articleOp.collectUser)).subscribe(v => {
        if(v.collect&&v.collect.length>0){
          this.isCollected = v.collect.find(v=>this.authId ==v)?true:false
        }else if(v.collect){
          this.isCollected = false
        }
      })
    }

  ngOnInit() {}

  collectUser(){
    this.store$.dispatch(new ArticleActions.CollectUserAction({id: this.authId, isCollected: this.isCollected}))
  }
}
