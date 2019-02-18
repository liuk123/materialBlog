import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Result, User } from '../domain';

@Injectable()
export class UserService {
    private readonly domain='api/user';
    constructor(private http:HttpClient,@Inject('BASE_CONFIG') private config){}

    private encodeParams(params){
        return Object.keys(params)
          .filter(key=>params[key])
          .reduce((sum:HttpParams,key:string)=>{
            return sum.append(key,params[key]);
          },new HttpParams());
      }
    user_card(id){
        const uri=`${this.config.uri}/${this.domain}/user_card`;
        const params = new HttpParams().append('id', id);
        return this.http.get<Result<User>>(uri, {params: params});
    }
    user_list(data){
        const uri=`${this.config.uri}/${this.domain}/user_list`;
        return this.http.get<Result<User[]>>(uri, {params: this.encodeParams(data)});
    }
    update_auth(data){
        const uri=`${this.config.uri}/${this.domain}/update_user`;
        return this.http.post<Result<User>>(uri, data);
    }

    del_category(v){
        const uri=`${this.config.uri}/${this.domain}/del_category`;
        const params = new HttpParams().append('category',encodeURIComponent(v));
        return this.http.delete<Result<User>>(uri, {params: params});
    }
}