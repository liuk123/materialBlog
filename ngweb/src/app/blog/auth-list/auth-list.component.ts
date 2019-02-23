import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/domain';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as actions from '../../actions/auth.action';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-auth-list',
  templateUrl: './auth-list.component.html',
  styleUrls: ['./auth-list.component.scss']
})
export class AuthListComponent implements OnInit {

  length = 100
  pageSize = 10
  userlist$: Observable<User[]>
  collect:string[]
  condition
  constructor(private store$: Store<fromRoot.State>, private routInfo: ActivatedRoute,private snackBar: MatSnackBar) {
    this.routInfo.queryParamMap.subscribe(v=>{
      this.collect = v.getAll('collect')
      if(this.collect.length == 0){
        this.snackBar.open('他没有关注的人', '关闭', {duration: 4000})
        return false
      }
      this.condition = {collect: this.collect, pageSize: this.pageSize, current: 0}
      this.store$.dispatch(new actions.UserListAction(this.condition))
      this.userlist$ = this.store$.pipe(select(fromRoot.getUserListState))
    })
  }

  ngOnInit() {
    // this.store$.dispatch(new actions.UserListAction({user:'', pageSize: this.pageSize, current: 0}))
    // this.userlist$ = this.store$.pipe(select(fromRoot.getUserListState))
  }
  onPage(ev){
    this.condition = {user: this.collect, pageSize: ev.pageSize, current: ev.pageIndex}
    this.store$.dispatch(new actions.UserListAction(this.condition))
  }

}
