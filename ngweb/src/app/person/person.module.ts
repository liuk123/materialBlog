import { NgModule } from '@angular/core';
import { PersonCenterComponent } from './person-center/person-center.component';
import { PersonRoutingModule } from './person-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PersonCenterComponent],
  imports: [
    PersonRoutingModule,
    SharedModule
  ]
})
export class PersonModule { }
