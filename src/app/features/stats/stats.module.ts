import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { StatsComponent } from './stats.component'

import { NativeScriptHttpClientModule } from '@nativescript/angular';
import { StatsRoutingModule } from './stats-routing.module';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptHttpClientModule, StatsRoutingModule],
  declarations: [StatsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class StatsModule {}
