import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article, Category } from 'src/app/domain';
import { Observable } from 'rxjs';

import * as fromRoot from '../../reducers';
import * as actions from '../../actions/article.action';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  form:FormGroup
  categories$: Observable<Category[]>
  article$: Observable<Article>

  constructor(private fb: FormBuilder, private store$: Store<fromRoot.State>,) {
    // this.article$ = this.store$.pipe(select(fromRoot.getArticleState))
    // this.categories$ = this.store$.pipe(
    //   select(fromRoot.getUserState),
    //   map(v => v.categories)
    // )
  }

  ngOnInit() {
    this.form = this.fb.group({
	    title: ['', [ Validators.required ]],
      abstract: ['', [ Validators.required, Validators.minLength(3) ]],
      category: [''],
      newCategory: [''],
      content: ['']
    })
  }

  onSubmit({value,valid},ev:Event){
    ev.preventDefault()
    console.log(JSON.stringify(value))
    this.store$.dispatch(new actions.CreateArticleAction(this.form.value))
  }

}
