import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../domain';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuoteService {
    constructor(private http:HttpClient,@Inject('BASE_CONFIG') private config){}

    getAuote():Observable<Quote>{
        const uri=`${this.config.uri}/assets/img/quotes/${Math.floor(Math.random()*10)}`
        return this.http.get<any>(uri)
    }
}