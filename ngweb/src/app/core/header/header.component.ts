import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';
import { User } from 'src/app/domain';
import * as actions from '../../actions/auth.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle=new EventEmitter<void>();
  @Output() toggleDarkTheme=new EventEmitter<Boolean>();

  auth$: Observable<User>
  constructor(private store$: Store<fromRoot.State>) {
    this.auth$ = this.store$.pipe(select(fromRoot.getAuthCardState))
    this.store$.dispatch(new actions.AuthCardAction(''))
  }

  ngOnInit() {
  }

  openSidebar(){
    this.toggle.emit();
  }

  onChange(checked:boolean){
    this.toggleDarkTheme.emit(checked)
  }

  logout(){
    this.store$.dispatch(new actions.LogoutAction(null))
  }
}
