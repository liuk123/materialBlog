import { Component, OnInit } from '@angular/core';

import * as fromRoot from '../../reducers';
import * as actions from '../../actions/auth.action';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/domain';

@Component({
  selector: 'app-auth-list',
  templateUrl: './auth-list.component.html',
  styleUrls: ['./auth-list.component.scss']
})
export class AuthListComponent implements OnInit {

  length = 100;
  pageSize = 10;
  userlist$: Observable<User[]>
  constructor(private store$: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store$.dispatch(new actions.UserListAction({user:'', pageSize: this.pageSize, current: 0}))
    this.userlist$ = this.store$.pipe(select(fromRoot.getUserListState))
  }
  onPage(ev){
    this.store$.dispatch(new actions.UserListAction({user:'', pageSize: ev.pageSize, current: ev.pageIndex}))
  }

}
