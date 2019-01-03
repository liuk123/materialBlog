import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/domain';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  article:Article={
    title:'angular路由',
    author:'liu',
    category:'angular',
    like:{
      likeNum:10,
      likeUser:['liu2']
    },
    commentNum:12,
    visitNum:20,
    content:'dsakjdkashdkjahsdjkahskj',
    meta:{
      createAt:new Date(),
      updateAt:new Date()
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
