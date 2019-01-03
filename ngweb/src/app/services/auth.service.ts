import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    private readonly domain='api/user';
    constructor(private http:HttpClient,@Inject('BASE_CONFIG') private config){}

    register(params){
        const uri=`${this.config.uri}/${this.domain}/register`;
        return this.http.post<any>(uri,params)
    }

    login(params){
        const uri=`${this.config.uri}/${this.domain}/login`;
        return this.http.post<any>(uri,params)
    }
}