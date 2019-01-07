import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homepageRoutingModule } from './homepage-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IndexHomeComponent } from './index-home/index-home.component';

@NgModule({
  declarations: [IndexHomeComponent],
  imports: [
    CommonModule,
    homepageRoutingModule,
    SharedModule
  ]
})
export class HomepageModule { }
