import { NgModule } from '@angular/core';
import { QuoteService } from './quote.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@NgModule()
export class ServicesModule {
  static forRoot(){
    return {
      ngModule: ServicesModule,
      providers: [
        QuoteService,
        AuthService,
        UserService,
      ]
    }
  }
}
