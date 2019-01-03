import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';
import * as fromRoot from '../reducers';
import { map, defaultIfEmpty } from 'rxjs/operators';
import * as RouterActions from '../actions/router.action';

@Injectable()
export class AuthGuardService implements CanActivate {
  /**
   * 构造函数用于注入服务的依赖以及进行必要的初始化
   *
   * @param router 路由注入，用于导航处理
   * @param store$ redux store注入，用于状态管理
   */
  constructor(private store$: Store<fromRoot.State>) {
  }

  /**
   * 用于判断是否可以激活该路由
   *
   * @param route
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkAuth();
  }

  checkAuth(): Observable<boolean> {
    return this.store$.pipe(
        select(s => s.auth),
        map(auth => {
          const result = auth !== undefined && auth !== null;
          if (!result) {
            new RouterActions.Go({
                path: ['/'],
                query: { page: 1 },
                extras: { replaceUrl: false }
            })
          }
          return result;
        }),
        defaultIfEmpty(false)
    )
      
  }
}
