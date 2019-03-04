import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationHomeComponent } from './navigation-home/navigation-home.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
    { path: 'navigation-home', component: NavigationHomeComponent},
    { path: 'searchbox', component: SearchComponent, outlet: 'popup' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class navigationRoutingModule {}
