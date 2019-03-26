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
import { catchError, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor (private snackBar: MatSnackBar){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {　
    
    let req = request.clone();
    return next.handle(req).pipe( 
      tap(
        event => {},
        error => this.handleData(error)
      )
      // mergeMap((event: any) => {
         
      //     if (event instanceof HttpResponse && event.status === 200)
      //         return this.handleData(event);//具体处理请求返回数据
      //         return of(event);
      // }),
      // catchError((err: HttpErrorResponse) => this.handleData(err))
    )
  }

  private handleData(event: HttpResponse<any> | HttpErrorResponse | any): Observable<any> {
    // 业务处理：一些通用操作
    switch (event.status) {
      case 500:
        this.snackBar.open('服务器端错误,请稍后重试', '关闭')
        break
      case 400:
        this.snackBar.open(event.error.msg, '关闭',{
          duration: 4000,
        })
        break
      default:
        
    }
    return of(event);
  }

}