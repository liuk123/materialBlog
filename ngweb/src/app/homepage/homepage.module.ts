import { NgModule } from '@angular/core';
import { homepageRoutingModule } from './homepage-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IndexHomeComponent } from './index-home/index-home.component';
import { BlogComponent } from './blog/blog.component';
import { NoticeComponent } from './notice/notice.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    IndexHomeComponent,
    BlogComponent,
    NoticeComponent,
    BannerComponent
  ],
  imports: [
    homepageRoutingModule,
    SharedModule
  ]
})
export class HomepageModule { }
