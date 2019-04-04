import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SearchComponent } from '../search/search.component';
import { Navigation } from 'src/app/domain';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import { columnsArr } from 'src/app/utils/common.util';

@Component({
  selector: 'app-navigation-home',
  templateUrl: './navigation-home.component.html',
  styleUrls: ['./navigation-home.component.scss']
})
export class NavigationHomeComponent implements OnInit{

  @ViewChild(SearchComponent)
  private searchComponent: SearchComponent;

  columns:Navigation[][] = [[],[],[]]

  remmendNav:Navigation[] = []
  keydownEvent: Subscription

  constructor(private router: Router, private el: ElementRef, private store$: Store<fromRoot.State>) {
    this.store$.pipe(select(fromRoot.getRemmendNavState)).subscribe(res=>{
      this.remmendNav = res
      columnsArr(this.remmendNav, this.columns)
    })
  }
  ngOnInit() {
    
    this.keydownEvent = fromEvent(window,'keydown').pipe(
      debounceTime(300)
    ).subscribe((v:KeyboardEvent)=>{
      // console.log(v.ctrlKey)//检测ctril键
      switch(v.keyCode){
        case 9:
        case 45:
          this.el.nativeElement.querySelector('.search-input').focus()
          break
        case 46:
          this.searchComponent.searchValue = '';
          break
        case 192:
          // 随机他开推荐的页面
          const n = Math.floor(Math.random() * this.remmendNav.length)
          const m = Math.floor(Math.random() * n)
          if(v.ctrlKey&&this.remmendNav[n]&&this.remmendNav[n].data[m]){
            window.open(this.remmendNav[n].data[m].url)
          }
          break
      }
    })
  }
  ngOnDestroy() {
    this.keydownEvent.unsubscribe();
  }
}
