import { Component, OnInit } from '@angular/core';
import { Navigation } from 'src/app/domain/navigation';

@Component({
  selector: 'app-recommend-navigation',
  templateUrl: './recommend-navigation.component.html',
  styleUrls: ['./recommend-navigation.component.scss']
})
export class RecommendNavigationComponent implements OnInit {

  columns:Navigation[][] = [[],[],[]]

  data:Navigation[]=[
    
    {
      title:'小鱼笔记资源1',
      data:[
        {
          name:'一个sp',
          desc:'一个很有趣的笔记',
          url:'http://lackk.com/nav/img/top/creativemass.png'
        },
        {
          name:'一个sp',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
        {
          name:'一个sp',
          desc:'一个很有趣的笔记',
          url:'http://lackk.com/nav/img/top/creativemass.png'
        },
        {
          name:'一个sp',
          desc:'一个很有趣的笔记',
          url:'http://lackk.com/nav/img/top/creativemass.png'
        },
        {
          name:'一个sp',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
        {
          name:'一个sp',
          desc:'一个很有趣的笔记',
          url:'http://lackk.com/nav/img/top/creativemass.png'
        }
      
      ]
    },
    {
      title:'小鱼笔记资源2',
      data:[
        {
          name:'一个sp',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      
        {
          name:'一个yy',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
        {
          name:'一个web',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      ]
    },
    {
      title:'小鱼笔记资源3',
      data:[
        {
          name:'一个sp',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      
        {
          name:'一个yy',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
        {
          name:'一个web',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      ]
    },
    {
      title:'小鱼笔记资源4',
      data:[
        {
          name:'一个sp',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      
        {
          name:'一个yy',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
        {
          name:'一个web',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      ]
    },
    {
      title:'小鱼笔记资源5',
      data:[
        {
          name:'一个sp',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      
        {
          name:'一个yy',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
        {
          name:'一个web',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      ]
    },
    {
      title:'小鱼笔记资源6',
      data:[
        {
          name:'一个sp',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      
        {
          name:'一个yy',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
        {
          name:'一个web',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      ]
    },
    {
      title:'小鱼笔记资源7',
      data:[
        {
          name:'一个sp',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      
        {
          name:'一个yy',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
        {
          name:'一个web',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      ]
    },
    {
      title:'小鱼笔记资源8',
      data:[
        {
          name:'一个sp',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      
        {
          name:'一个yy',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
        {
          name:'一个web',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      ]
    },
    {
      title:'小鱼笔记资源9',
      data:[
        {
          name:'一个sp',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      
        {
          name:'一个yy',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
        {
          name:'一个web',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      ]
    },
    {
      title:'小鱼笔记资源10',
      data:[
        {
          name:'一个sp',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      
        {
          name:'一个yy',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
        {
          name:'一个web',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      ]
    },
    {
      title:'小鱼笔记资源11',
      data:[
        {
          name:'一个sp',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      
        {
          name:'一个yy',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
        {
          name:'一个web',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      ]
    },
    {
      title:'小鱼笔记资源6',
      data:[
        {
          name:'一个sp',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      
        {
          name:'一个yy',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
        {
          name:'一个web',
          desc:'一个很有趣的笔记',
          url:'https://www.google.cn/s2/favicons?domain=www.digitalartsonline.co.uk'
        },
      ]
    }
    
  ]
  constructor() { }

  ngOnInit() {
    //把data分为4列
    this.columns = this.data.reduce((columns, item)=>{
      let minH = columns[0].reduce((s,v) => s += v.data.length + 1, 0)
      let n = 0

      for(let j = 1; j < this.columns.length; j++){
        let jh = columns[j].reduce((s,v) => s += v.data.length + 1, 0)
        if(minH>jh){
          minH=jh
          n=j
        }
      }
      columns[n].push(item)
      return columns 
    },this.columns)
  }

}
