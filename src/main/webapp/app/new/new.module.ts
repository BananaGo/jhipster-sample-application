import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared/shared.module';
import { SOME_NEW_COMPONENT_ROUTE } from './new.route';
import { NewComponent } from './new.component';

@NgModule({
  imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild([SOME_NEW_COMPONENT_ROUTE])],
  declarations: [NewComponent]
})
export class NewComponentModule {}
