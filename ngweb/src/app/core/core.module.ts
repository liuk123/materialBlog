import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.util'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from '../services/services.module';
import { AppStoreModule } from '../reducers';
import { AppEffectsModule } from '../effects';
import { PageNotFoundComponent } from './page-not-found';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
    AppStoreModule,
    AppEffectsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {
      provide:'BASE_CONFIG', useValue: {
        // uri:'http://localhost:3200'
        uri:''
      }
    }
  ]
})
export class CoreModule {
  constructor(
      @Optional() @SkipSelf() parent:CoreModule,
      ir:MatIconRegistry,
      ds:DomSanitizer
    ){
      if(parent){
        throw new Error('模块已经存在，不能再次加载');
      }
      //加载svg的图片
      loadSvgResources(ir,ds)
  }
}
