import { Component, OnInit } from '@angular/core';

import * as fromRoot from '../../reducers';
import * as actions from '../../actions/auth.action';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/domain';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-list',
  templateUrl: './auth-list.component.html',
  styleUrls: ['./auth-list.component.scss']
})
export class AuthListComponent implements OnInit {

  length = 100
  pageSize = 10
  label: string[]
  userlist$: Observable<User[]>
  constructor(private store$: Store<fromRoot.State>, private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    
    this.userlist$ = this.store$.pipe(select(fromRoot.getUserListState))
    this.store$.pipe(select(fromRoot.getAuthCardState)).subscribe(v => {
      this.label = v.label
    })
    this.routerInfo.data.subscribe(v=>{
      if(v.key == 'all'){
        this.store$.dispatch(new actions.UserListAction({user:'', pageSize: this.pageSize, current: 0}))
      }else if(v.key == 'recommend'){
        this.store$.dispatch(new actions.UserListAction({user:'', label: this.label, pageSize: this.pageSize, current: 0}))
        // this.store$.dispatch(new actions.ArticleListAction({id:'all', category: 'all', label: this.label, pageSize: this.pageSize, current: 0}))
      }
      
    })
  }
  onPage(ev){
    this.store$.dispatch(new actions.UserListAction({user:'', pageSize: ev.pageSize, current: ev.pageIndex}))
  }

}
