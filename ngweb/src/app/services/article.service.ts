import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Result, Article, articleDetail, Comment } from '../domain';

@Injectable()
export class ArticleService {
    private readonly domain='api/article';
    constructor(private http:HttpClient,@Inject('BASE_CONFIG') private config){}

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

    get_list({id , category}){
        const uri=`${this.config.uri}/${this.domain}/get_list`;
        const params = new HttpParams().append('id',id).append('category', category)
        return this.http.get<Result<Article[]>>(uri, { params: params });
    }
    get_detail(id){
        const uri=`${this.config.uri}/${this.domain}/get_detail`;
        const params = new HttpParams().append('id', id)
        return this.http.get<Result<articleDetail>>(uri, { params: params });
    }

    reply(data){
        const uri=`${this.config.uri}/${this.domain}/comment`;
        return this.http.post<Result<Comment>>(uri,data)
    }
}

