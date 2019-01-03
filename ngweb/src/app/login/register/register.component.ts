import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as authActions from '../../actions/auth.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  items:string[];
  form:FormGroup;
  private readonly  avatarName = 'avatars';

  constructor(private fb:FormBuilder, private store$: Store<fromRoot.State>) { }

  ngOnInit() {
    const img= `${this.avatarName}:svg-${Math.floor(Math.random()*16).toFixed(0)}`
    const nums = [1,2,3,4,5,6,7,8,9,10];
    this.items = nums.map(d=>`avatars:svg-${d}`);
    this.form=this.fb.group({
      phone:[''],
      userName:[''],
      password:[''],
      repeat:[''],
      avatar:[img],
    })
    
  }

  onSubmit({value,valid},ev:Event){

    if( !valid ) return false
    this.store$.dispatch(new authActions.RegisterAction(value))
  }

}
