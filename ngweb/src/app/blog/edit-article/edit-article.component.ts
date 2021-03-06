import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article, Category } from 'src/app/domain';
import { Observable } from 'rxjs';

import * as fromRoot from '../../reducers';
import * as actions from '../../actions/article.action';
import * as Auth_actions from '../../actions/auth.action';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  form:FormGroup
  categories$: Observable<Category[]>
  label$: Observable<object>
  article: Article

  constructor(
      private fb: FormBuilder,
      private store$: Store<fromRoot.State>,
      private routInfo: ActivatedRoute
    ) {
      this.categories$ = this.store$.pipe(
        select(fromRoot.getAuthCardState),
        map(v => v.categories)
      )
      this.store$.pipe(select(fromRoot.getArticleDetailState)).subscribe(res => this.article = res)
      this.label$ = this.store$.pipe(select(fromRoot.getLabelState))
  }

  ngOnInit() {
    this.form = this.fb.group({
	    title: ['', [ Validators.required, Validators.minLength(3) ]],
      abstract: ['', [ Validators.required, Validators.minLength(3) ]],
      category: [''],
      newCategory: [''],
      content: ['', [ Validators.required, Validators.minLength(3) ]],
      _id: [''],
      label: ['']
    })
    this.routInfo.queryParamMap.subscribe(v => {
      if(v.get('id')){
        this.form.patchValue(this.article)
      }
    })
  }

  onSubmit({value,valid},ev:Event){
    if( !valid ) return false
    if(value.newCategory){
      this.store$.dispatch(new Auth_actions.AuthCardAction(''))
    }
    if(value._id){
      this.store$.dispatch(new actions.EditeArticleAction(value))
    }else{
      delete value._id
      this.store$.dispatch(new actions.CreateArticleAction(value))
    }
    
  }

}
