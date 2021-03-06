import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import { User } from 'src/app/domain';
import * as actions from '../../actions/auth.action';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person-center',
  templateUrl: './person-center.component.html',
  styleUrls: ['./person-center.component.scss']
})
export class PersonCenterComponent implements OnInit {

  auth: User
  items
  form: FormGroup
  label$: Observable<object>

  constructor(private store$: Store<fromRoot.State>, private fb: FormBuilder) {
    this.form = this.fb.group({
      userName: [''],
      introduce: [''],
      phone: [''],
      avatar: [''],
      label: ['']
    })
    this.store$.pipe(select(fromRoot.getAuthCardState)).subscribe(res => {
      this.auth = res
      this.form.patchValue(res)
    })

    this.label$ = this.store$.pipe(select(fromRoot.getLabelState))
  }

  ngOnInit() {
    const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    this.items = nums.map(d=>`avatars:svg-${d}`)
   
  }
  onSubmit({value,valid},ev:Event){
    this.store$.dispatch(new actions.UpdateAuthAction(value))
  }
  del_category(v){
    this.store$.dispatch(new actions.DelCategoryAction(v))
  }

  // openLabelDialog(){
  //   const labelDialog = this.dialog.open(AddLabelComponent, {
  //     data:{label$: this.label$},
  //     width: '400px'
  //   })
  // }
}
