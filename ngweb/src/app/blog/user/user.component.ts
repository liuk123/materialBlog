import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/domain';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as actions from '../../actions/auth.action';
import * as ArticleActions from '../../actions/article.action';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$: Observable<User>
  authId: string

  constructor(
    private store$: Store<fromRoot.State>,
    private routInfo: ActivatedRoute
    ) {}

  ngOnInit() {
    this.routInfo.paramMap.subscribe(m=>{
      this.authId = m.get('authId');
      this.store$.dispatch(new actions.UserCardAction(this.authId))
    })
    this.user$ = this.store$.pipe(select(fromRoot.getUserState))
  }

  collectUser(){
    this.store$.dispatch(new ArticleActions.CollectUserAction({id: this.authId}))
  }
}
