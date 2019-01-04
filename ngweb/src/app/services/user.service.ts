import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Result, User } from '../domain';

@Injectable()
export class UserService {
    private readonly domain='api/user';
    constructor(private http:HttpClient,@Inject('BASE_CONFIG') private config){}

    userCard(id){
        const uri=`${this.config.uri}/${this.domain}/user_card`;
        const params = new HttpParams().append('id',id);
        return this.http.get<Result<User>>(uri, {params: params});
    }
}