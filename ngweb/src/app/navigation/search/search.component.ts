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
    if(this.searchValue){
      window.open(uri + this.searchValue, '_blank')
    }else{
      const reg = /(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z0-9]+(\.com)?/
      uri.replace(reg,(keyword)=>{
        window.open(keyword, '_blank')
      })
    }
    
  }
  empty(){
    this.searchValue = '';
  }
  goSearch(ev){
    if(ev.keyCode == 13){
      this.search('https://www.baidu.com/s?wd=')
    }else if(ev.keyCode == 46){
      this.empty()
    }
    
  }
}
