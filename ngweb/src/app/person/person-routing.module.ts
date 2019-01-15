import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonCenterComponent } from './person-center/person-center.component';

const routes: Routes = [
    { path: 'person-center', component: PersonCenterComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonRoutingModule {}
