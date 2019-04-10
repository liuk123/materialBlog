import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdItem } from '../domain';
import { adCardComponent } from '../shared/ad/b-2.component';
import { adListComponent } from '../shared/ad/b-1.component';

@Injectable()
export class adService {
    private readonly domain='api/user';
    constructor(private http:HttpClient,@Inject('BASE_CONFIG') private config){}

    getBanner(){
        return [
            new AdItem(adCardComponent,{name:'1、快乐小鱼',body:'记录点滴，分享精彩'}),
            new AdItem(adCardComponent,{name:'2、不速之客',body:'形容节假日期间，堵在高速公路上的人。没有速度，成为了公路上的旅客。'}),
            new AdItem(adCardComponent,{name:'3、保温杯',body:'一种特殊的杯具，可以让任何使用者进入中年危机。'}),
            new AdItem(adCardComponent,{name:'4、草皮',body:'影响国足发挥的关键因素。'}),
            
        ]
    }
}