import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexHomeComponent } from './index-home/index-home.component';

const routes: Routes = [
    { path: 'index-home', component: IndexHomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class homepageRoutingModule {}
