import { Component, OnInit } from '@angular/core';
import { Navigation } from 'src/app/domain/navigation';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-recommend-navigation',
  templateUrl: './recommend-navigation.component.html',
  styleUrls: ['./recommend-navigation.component.scss']
})
export class RecommendNavigationComponent implements OnInit {

  columns:Navigation[][] = [[],[],[]]

  constructor(private store$: Store<fromRoot.State>) {
    this.store$.pipe(select(fromRoot.getRemmendNavState)).subscribe(res=>{
      this.columnsArr(res,this.columns)
    })
  }

  ngOnInit() {
    
  }

  //把data分为4列
  //data为原始数组，columns为需要填充的数组 [[],[],[]]
  columnsArr(data,columns){
    columns = data.reduce((columns, item)=>{
      let minH = columns[0].reduce((s,v) => s += v.data.length + 2, 0)
      let n = 0

      for(let j = 1; j < columns.length; j++){
        let jh = columns[j].reduce((s,v) => s += v.data.length + 2, 0)
        if(minH>jh){
          minH=jh
          n=j
        }
      }
      columns[n].push(item)
      return columns 
    },columns)
  }


  open(url){
    window.open(url,'_blank');
  }
}
