import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import { User } from 'src/app/domain';

@Component({
  selector: 'app-person-center',
  templateUrl: './person-center.component.html',
  styleUrls: ['./person-center.component.scss']
})
export class PersonCenterComponent implements OnInit {

  auth: User
  constructor(private store$: Store<fromRoot.State>) {
    this.store$.pipe(select(fromRoot.getAuthCardState)).subscribe(res => this.auth = res)
  }

  ngOnInit() {
  }

}
