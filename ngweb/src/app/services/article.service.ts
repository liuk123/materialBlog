import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Result, Article, Comment, ArticleListParam } from '../domain';

@Injectable()
export class ArticleService {
    private readonly domain='api/article';
    constructor(private http:HttpClient,@Inject('BASE_CONFIG') private config){}
    private encodeParams(params){
        return Object.keys(params)
          .filter(key=>params[key])
          .reduce((sum:HttpParams,key:string)=>{
            return sum.append(key,params[key]);
          },new HttpParams());
      }
    update(data){
        const uri=`${this.config.uri}/${this.domain}/update`;
        return this.http.post<Result<null>>(uri, data );
    }

    create(data){
        const uri=`${this.config.uri}/${this.domain}/create`;
        return this.http.post<Result<null>>(uri, data );
    }

    delete({id, category}){
        const uri=`${this.config.uri}/${this.domain}/delete`;
        const params = new HttpParams().append('id', id).append('category',category)
        return this.http.delete<Result<null>>(uri, { params: params });
    }

    like(data){
        const uri=`${this.config.uri}/${this.domain}/like`;
        return this.http.post<Result<null>>(uri, data );
    }

    collectArticle(data){
        const uri=`${this.config.uri}/${this.domain}/collectArticle`;
        return this.http.post<Result<null>>(uri, data );
    }
    
    collectUser(data){
        const uri=`${this.config.uri}/${this.domain}/collectUser`;
        return this.http.post<Result<null>>(uri, data );
    }

    get_list(data:ArticleListParam){
        const uri=`${this.config.uri}/${this.domain}/get_list`;
        return this.http.get<Result<Article[]>>(uri, { params: this.encodeParams(data) });
    }
    get_detail(id){
        const uri=`${this.config.uri}/${this.domain}/get_detail`;
        const params = new HttpParams().append('id', id)
        return this.http.get<Result<Article>>(uri, { params: params });
    }
    get_comment(id){
        const uri=`${this.config.uri}/${this.domain}/get_comment`;
        const params = new HttpParams().append('id', id)
        return this.http.get<Result<Comment[]>>(uri, { params: params });
    }

    reply(data){
        const uri=`${this.config.uri}/${this.domain}/comment`;
        return this.http.post<Result<Comment>>(uri,data)
    }
}

