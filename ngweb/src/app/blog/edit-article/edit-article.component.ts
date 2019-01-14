import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article, Category } from 'src/app/domain';
import { Observable } from 'rxjs';

import * as fromRoot from '../../reducers';
import * as actions from '../../actions/article.action';
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
  article: Article
  id: string

  constructor(
      private fb: FormBuilder,
      private store$: Store<fromRoot.State>,
      private routInfo: ActivatedRoute
    ) {
      this.categories$ = this.store$.pipe(
        select(fromRoot.getAuthCardState),
        map(v => v.categories)
      )
      this.store$.pipe(select(fromRoot.getArticleDetailState)).subscribe(res => {
        this.article = res
      })
  }

  ngOnInit() {
    this.form = this.fb.group({
	    title: ['', [ Validators.required ]],
      abstract: ['', [ Validators.required, Validators.minLength(3) ]],
      category: [''],
      newCategory: [''],
      content: ['']
    })
    this.routInfo.queryParamMap.subscribe(v => {
      if(v.get('id')){
        this.form.patchValue(this.article)
      }
    })
  }

  onSubmit({value,valid},ev:Event){
    ev.preventDefault()
    console.log(JSON.stringify(value))
    this.store$.dispatch(new actions.CreateArticleAction(this.form.value))
  }

}
