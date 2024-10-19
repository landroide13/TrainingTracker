import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { WorkoutComponent } from './workout.component'

import { NativeScriptHttpClientModule } from '@nativescript/angular';
import { WorkoutRoutingModule } from './workout-routing.module';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptHttpClientModule, WorkoutRoutingModule],
  declarations: [WorkoutComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class WorkoutModule {}