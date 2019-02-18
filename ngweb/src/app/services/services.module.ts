import { NgModule } from '@angular/core';
import { QuoteService } from './quote.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { ArticleService } from './article.service';
import { AuthGuardService } from './auth-guard.service';
import { InterceptorService } from './Interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LabelService } from './label.service';

export {
  AuthGuardService
}
@NgModule()
export class ServicesModule {
  static forRoot(){
    return {
      ngModule: ServicesModule,
      providers: [
        QuoteService,
        AuthService,
        UserService,
        ArticleService,
        AuthGuardService,
        LabelService,
        { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
      ]
    }
  }
}
