import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  _searchValue: string = '';
  get searchValue(){
    return encodeURIComponent(this._searchValue)
  }
  set searchValue(v){
    this._searchValue = v
  }

  constructor() { }

  ngOnInit() {
  }

  search(uri){
    window.open(uri + this.searchValue, '_blank')
  }
  empty(){
    this.searchValue = '';
  }
}

// https://www.baidu.com/s?wd=huo%20ying%20花
// 'https://cn.bing.com/search?q=huo+ying+%E8%B4%A7%E5%8F%B7'
// https://www.google.com/search?q=123+huo+火影&oq=123+huo+火影
