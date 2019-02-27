import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../reducers';
import * as actions from '../../actions/article.action';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Article } from 'src/app/domain';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  length = 100
  pageSize = 10
  label: string = '1'
  articles$: Observable<Article[]>
  constructor(private store$: Store<fromRoot.State>, private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.articles$ = this.store$.pipe(select(fromRoot.getArticleListState))
  
    this.routerInfo.data.subscribe(v=>{
      if(v.key == 'all'){
        this.store$.dispatch(new actions.ArticleListAction({id:'all', category: 'all', pageSize: this.pageSize, current: 0}))
      }else if(v.key == 'recommend'){
        this.store$.dispatch(new actions.ArticleListAction({id:'all', category: 'all', label: this.label, pageSize: this.pageSize, current: 0}))
      }
      
    })
  }

  onPage(ev){
    this.store$.dispatch(new actions.ArticleListAction({id:'all', category: 'all', pageSize: ev.pageSize, current: ev.pageIndex}))
  }

}
