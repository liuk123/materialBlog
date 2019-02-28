import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { BlogModule } from './blog/blog.module';
import { HomepageModule } from './homepage/homepage.module';
import { PersonModule } from './person/person.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    LoginModule,
    BlogModule,
    HomepageModule,
    PersonModule,
    NavigationModule,
  ],
  providers: [{
    provide:LocationStrategy,
    useClass:HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
