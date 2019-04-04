import { Component, OnInit, Inject } from '@angular/core';
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
  pageSize
  userlist$: Observable<User[]>
  collect: string
  condition: Object

  constructor(private store$: Store<fromRoot.State>, private routInfo: ActivatedRoute,private snackBar: MatSnackBar,@Inject('BASE_CONFIG') private config) {

    this.pageSize = this.config.pageSize
    
    this.routInfo.queryParamMap.subscribe( v=> {

      this.collect = v.get('collect')
      
      if(this.collect){
        this.condition = {collect: this.collect, pageSize: this.pageSize, current: 0}
        this.store$.dispatch(new actions.UserListAction(this.condition))
        this.userlist$ = this.store$.pipe(select(fromRoot.getUserListState))
      }else{
        this.snackBar.open('没有关注的人', '关闭', {duration: 1000})
      }
    })

  }

  ngOnInit() {
  
  }
  onPage(ev){
    this.condition = {collect: this.collect, pageSize: ev.pageSize, current: ev.pageIndex}
    this.store$.dispatch(new actions.UserListAction(this.condition))
  }

}
