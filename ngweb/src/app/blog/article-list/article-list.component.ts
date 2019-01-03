import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/domain';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles:Article[]=[
    {
      title:'angular路由1',
      abstract:'这是一个剑姬',
      author:'liu',
      category: 'angular',
      like:{
        likeNum:3,
        likeUser:[]
      },
      commentNum:0,
      visitNum:0,
      content:'123内容',
      label:[],
      meta:{
        createAt:new Date(),
        updateAt:new Date()
      }
    
  
    },
    {
      title:'angular路由2',
      abstract:'这是一个剑姬',
      author:'liu',
      category: 'angular',
      like:{
        likeNum:3,
        likeUser:[]
      },
      commentNum:0,
      visitNum:0,
      content:'123内容',
      label:[],
      meta:{
        createAt:new Date(),
        updateAt:new Date()
      }
      
  
    }  
  ]

  constructor() { }

  ngOnInit() {
  }

}
