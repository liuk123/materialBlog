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
  auth:User
  user:User

  constructor(
    private store$: Store<fromRoot.State>,
    private routInfo: ActivatedRoute
    ) {}

  ngOnInit() {
    this.routInfo.paramMap.subscribe(m=>{
      this.authId = m.get('authId')
      this.store$.dispatch(new actions.UserCardAction(this.authId))
    })
    
    //关注-监听auth用户信息，判断是否关注
    this.store$.pipe(select(fromRoot.getAuthCardState)).subscribe(v=>{
      this.auth = v
      if(this.auth.collectUser&&this.auth.collectUser instanceof Array){
        this.isCollected = this.auth.collectUser.find(v =>v==this.authId)?true:false  
      }
    })
    this.store$.pipe(select(fromRoot.getUserState)).subscribe(v=>{
      this.user = v
      if(this.auth.collectUser&&this.auth.collectUser instanceof Array){
        this.isCollected = this.auth.collectUser.find(v =>v==this.authId)?true:false  
      }
    })
  }

  collectUser(){
    this.store$.dispatch(new ArticleActions.CollectUserAction({id: this.authId, isCollected: this.isCollected}))
  }
}
