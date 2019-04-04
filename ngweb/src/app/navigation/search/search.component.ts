import { Component, OnInit, ElementRef } from '@angular/core';

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

  searchUriData=[
    {
      name:'百度',
      searchUri:'https://www.baidu.com/s?wd=',
      indexUri:'https://www.baidu.com',
      type:'get',
      content:[
        {
          name:'谷歌',
          searchUri:'https://www.google.com/search?q=',
          indexUri:'https://www.google.com',
          type:'get'
        },
        {
          name:'必应',
          searchUri:'https://cn.bing.com/search?q=',
          indexUri:'https://cn.bing.com',
          type:'get'
        }
      ]
    },
    {
      name:'视频',
      searchUri:'https://so.iqiyi.com/so/q_',
      indexUri:'https://iqiyi.com',
      type:'get',
      width:'136px',
      content:[
        {
          name:'爱奇艺',
          searchUri:'https://so.iqiyi.com/so/q_',
          indexUri:'https://iqiyi.com',
          type:'get',
        },
        {
          name:'腾讯',
          searchUri:'https://v.qq.com/x/search/?q=',
          indexUri:'https://v.qq.com',
          type:'get'
        },
        {
          name:'优酷',
          searchUri:'https://so.youku.com/search_video/q_',
          indexUri:'https://youku.com',
          type:'get'
        },
        {
          name:'芒果',
          searchUri:'https://so.mgtv.com/so/k-',
          indexUri:'https://mgtv.com',
          type:'get'
        },
        {
          name:'bilibili',
          searchUri:'https://search.bilibili.com/all?keyword=',
          indexUri:'https://bilibili.com',
          type:'get'
        },
        {
          name:'acfun',
          searchUri:'http://www.acfun.cn/search/?#query=',
          indexUri:'http://www.acfun.cn/',
          type:'get'
        }
      ]
    },
    {
      name:'音乐',
      searchUri:'http://music.ifkdy.com/?type=netease&name=',
      indexUri:'http://music.ifkdy.com/?type=netease',
      type:'get',
      content:[
        {
          name:'网易',
          searchUri:'https://music.163.com/#/search/m/?s=',
          indexUri:'https://music.163.com',
          type:'get'
        },
        {
          name:'QQ',
          searchUri:'https://y.qq.com/portal/search.html#w=',
          indexUri:'https://y.qq.com',
          type:'get'
        }
      ]
    },
    {
      name:'知乎',
      searchUri:'https://www.zhihu.com/search?q=',
      indexUri:'https://www.zhihu.com',
      type:'get',
      content:[
        {
          name:'豆瓣',
          searchUri:'https://www.douban.com/search?q=',
          indexUri:'https://www.douban.com',
          type:'get'
        }
      ]
    },
    {
      name:'翻译',
      searchUri:'https://fanyi.baidu.com/?aldtype=16047#zh/en/',
      indexUri:'https://fanyi.baidu.com',
      type:'get',
      content:[
        {
          name:'英中',
          searchUri:'https://translate.google.cn/#view=home&op=translate&sl=en&tl=zh-CN&text=',
          indexUri:'https://translate.google.cn',
          type:'get'
        },
        {
          name:'中英',
          searchUri:'https://translate.google.cn/#view=home&op=translate&sl=zh-CN&tl=en&text=',
          indexUri:'https://translate.google.cn',
          type:'get'
        }
      ]
    },
    {
      name:'图片',
      searchUri:'https://image.baidu.com/search/index?tn=baiduimage&word=',
      indexUri:'https://image.baidu.com',
      type:'get',
      content:[
        {
          name:'谷歌',
          searchUri:'https://www.google.com/search?tbm=isch&q=',
          indexUri:'https://www.google.com/search?tbm=isch',
          type:'get'
        },
        {
          name:'必应',
          searchUri:'https://cn.bing.com/images/search?FORM=HDRSC2&q=',
          indexUri:'https://cn.bing.com/images/search?FORM=HDRSC2',
          type:'get'
        }
      ]
    },
    {
      name:'资源',
      searchUri:'http://www.pansoso.com/zh/',
      indexUri:'http://www.pansoso.com',
      type:'get',
      content:[
        {
          name:'磁力猫',
          searchUri:'https://www.cilimao.cc/search?word=',
          indexUri:'https://www.cilimao.cc',
          type:'get'
        }
      ]
    },
    {
      name:'软件',
      searchUri:'https://pc.qq.com/search.html#!keyword=',
      indexUri:'https://pc.qq.com',
      type:'get',
      content:[
        {
          name:'谷歌商店',
          searchUri:'https://play.google.com/store/search?q=',
          indexUri:'https://play.google.com',
          type:'get'
        }
      ]
    },
  ]

  constructor() {}

  ngOnInit() {
    
  }

  search(searchUri:string,indexUri:string = ''){
    if(this.searchValue){
      window.open(searchUri + this.searchValue, '_blank')
    }else{
      window.open(indexUri, '_blank')
    }
  }
}
