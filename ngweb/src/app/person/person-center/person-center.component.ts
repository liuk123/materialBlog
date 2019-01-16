import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import { User } from 'src/app/domain';
import * as actions from '../../actions/auth.action';

@Component({
  selector: 'app-person-center',
  templateUrl: './person-center.component.html',
  styleUrls: ['./person-center.component.scss']
})
export class PersonCenterComponent implements OnInit {

  auth: User
  items
  avatar
  constructor(private store$: Store<fromRoot.State>) {
    this.store$.pipe(select(fromRoot.getAuthCardState)).subscribe(res => {
      this.auth = res
      this.avatar = res.avatar
    })
  }

  ngOnInit() {
    const nums = [1,2,3,4,5,6,7,8,9,10]
    this.items = nums.map(d=>`avatars:svg-${d}`)
  }
  updateAuth(data){
    this.store$.dispatch(new actions.UpdateAuthAction(data))
  }
}
