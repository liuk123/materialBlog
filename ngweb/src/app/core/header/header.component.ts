import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { User } from 'src/app/domain';
import * as actions from '../../actions/auth.action';
import * as LabelActions from '../../actions/label.action';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggle=new EventEmitter<void>();
  @Output() switchTheme=new EventEmitter<string>();

  auth: User
  // label
  constructor(private store$: Store<fromRoot.State>) {
    this.store$.pipe(select(fromRoot.getAuthCardState)).subscribe(res => {
      this.switchTheme.emit(res.theme)
      this.auth = res})
    this.store$.pipe(select(fromRoot.getAuthState)).subscribe(res => {
      this.switchTheme.emit(res.theme)
      this.auth = res})

    this.store$.dispatch(new actions.AuthCardAction(''))
    this.store$.dispatch(new LabelActions.LabelAction(null))
  }

  ngOnInit() {
    
  }

  openSidebar(){
    this.toggle.emit();
  }

  changeTheme(color:string){
    this.switchTheme.emit(color)
    this.store$.dispatch(new actions.UpdateAuthAction({theme: color}))
  }
  logout(){
    this.store$.dispatch(new actions.LogoutAction(this.auth._id))
  }
}
