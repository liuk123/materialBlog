import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Quote } from 'src/app/domain';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as actions from '../../actions/quote.action';
import * as authActions from '../../actions/auth.action';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  quote$: Observable<Quote>;

  constructor(
    private store$: Store<fromRoot.State>,
  ){
    this.quote$ = this.store$.pipe(select(fromRoot.getQuote))
    this.store$.dispatch(new actions.LoadAction(null))
  }

  ngOnInit() {
    this.form=new FormGroup({
      userName:new FormControl('',[Validators.required]),
      password:new FormControl('',Validators.required)
    })
  }

  onSubmit({value,valid},ev:Event){
    if( !valid ) return false
    this.store$.dispatch(new authActions.LoginAction(value))
  }

}
