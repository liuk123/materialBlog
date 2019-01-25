import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpResponse,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';


@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor (){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {　
    
    let req = request.clone();
    return next.handle(req).pipe( 
      mergeMap((event: any) => {
         
          if (event instanceof HttpResponse && event.status === 200)
              return this.handleData(event);//具体处理请求返回数据
              return of(event);
      }),
      catchError((err: HttpErrorResponse) => this.handleData(err))
    )
  }

  private handleData(event: HttpResponse<any> | HttpErrorResponse): Observable<any> {
    // 业务处理：一些通用操作
    switch (event.status) {
      case -200:
        console.log(-200)
      case 400:
        console.log(321)
      default:
        return of(event);
    }
  }

}