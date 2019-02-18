import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result, Label } from '../domain';

@Injectable()
export class LabelService {
    private readonly domain='api/article';
    constructor(private http:HttpClient,@Inject('BASE_CONFIG') private config){}

    label(){
        const uri=`${this.config.uri}/${this.domain}/label`;
        return this.http.get<Result<Label[]>>( uri );
    }
}

