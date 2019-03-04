import { NgModule } from '@angular/core';
import { NavigationHomeComponent } from './navigation-home/navigation-home.component';
import { RecommendNavigationComponent } from './recommend-navigation/recommend-navigation.component';
import { CollectNavigationComponent } from './collect-navigation/collect-navigation.component';
import { navigationRoutingModule } from './navigation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    NavigationHomeComponent,
    RecommendNavigationComponent,
    CollectNavigationComponent,
    SearchComponent
  ],
  imports: [
    SharedModule,
    navigationRoutingModule,
  ]
})
export class NavigationModule { }
