import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/domain';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as actions from '../../actions/user.action';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user:User={
    userName:'liu',
    role:1,
  }
  user$: Observable<User>;

  constructor(
    private store$: Store<fromRoot.State>,
    private routInfo: ActivatedRoute
    ) {
      this.routInfo.paramMap.subscribe(m=>
        this.store$.dispatch(new actions.UserCardAction(m.get('authId'))))
      this.user$ = this.store$.pipe(
        select(fromRoot.getUserState),
        map(v=>{
          console.log(v);
          return v
        })
      )
  }

  ngOnInit() {
  }

}
