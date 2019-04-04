import { Component, OnInit, Inject } from '@angular/core';
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
  pageSize = 9
  articles$: Observable<Article[]>
  pageLabel:string;
  constructor(private store$: Store<fromRoot.State>, private routerInfo: ActivatedRoute,@Inject('BASE_CONFIG') private config) {
    this.pageSize = this.config.pageSize
  }

  ngOnInit() {
    this.articles$ = this.store$.pipe(select(fromRoot.getArticleListState))
  
    this.routerInfo.data.subscribe(v=>{

      this.pageLabel = v.key;

      if(v.key == 'all'){
        this.store$.dispatch(new actions.ArticleListAction({id:'all', category: 'all', pageSize: this.pageSize, current: 0}))
      }else if(v.key == 'recommend'){
        this.store$.dispatch(new actions.ArticleListAction({id:'all', category: 'all', label: '1', pageSize: this.pageSize, current: 0}))
      }
      
    })
  }

  onPage(ev){
    if(this.pageLabel == 'all'){
      this.store$.dispatch(new actions.ArticleListAction({id:'all', category: 'all', pageSize: ev.pageSize, current: ev.pageIndex}))
    }else if(this.pageLabel == 'recommend'){
      this.store$.dispatch(new actions.ArticleListAction({id:'all', category: 'all', label: '1', pageSize: ev.pageSize, current: ev.pageIndex}))
    }
  }

}
