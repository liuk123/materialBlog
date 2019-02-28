import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationHomeComponent } from './navigation-home/navigation-home.component';


const routes: Routes = [
    { path: 'navigation-home', component: NavigationHomeComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class navigationRoutingModule {}
