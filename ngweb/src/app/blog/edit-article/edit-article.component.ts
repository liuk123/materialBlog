import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/domain';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  form:FormGroup
  categories:string[]

  constructor(private fb: FormBuilder) { }

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
  }

}
