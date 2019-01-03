import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homepageRoutingModule } from './homepage-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    homepageRoutingModule,
    SharedModule
  ]
})
export class HomepageModule { }
