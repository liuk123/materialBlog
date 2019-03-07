import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Navigation, Result } from '../domain';

@Injectable()
export class NavigationService {
    private readonly domain='api/navigation';
    constructor(private http:HttpClient,@Inject('BASE_CONFIG') private config){}

    get_remmend(){
        const uri=`${this.config.uri}/${this.domain}/get_recommend_navigation`;
        return this.http.get<Result<Navigation[]>>(uri)
    }
}