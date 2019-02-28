import { NgModule } from '@angular/core';
import { NavigationHomeComponent } from './navigation-home/navigation-home.component';
import { RecommendNavigationComponent } from './recommend-navigation/recommend-navigation.component';
import { CollectNavigationComponent } from './collect-navigation/collect-navigation.component';
import { navigationRoutingModule } from './navigation-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NavigationHomeComponent, RecommendNavigationComponent, CollectNavigationComponent],
  imports: [
    SharedModule,
    navigationRoutingModule,
  ]
})
export class NavigationModule { }
