import { NgModule } from '@angular/core';
import { PersonCenterComponent } from './person-center/person-center.component';
import { PersonRoutingModule } from './person-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddLabelComponent } from './add-label/add-label.component';

@NgModule({
  declarations: [PersonCenterComponent, AddLabelComponent],
  imports: [
    PersonRoutingModule,
    SharedModule
  ],
  entryComponents: [AddLabelComponent]
})
export class PersonModule { }
