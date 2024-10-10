import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { TodosComponent } from './todos.component'

import { NativeScriptHttpClientModule } from '@nativescript/angular';
import { TodosRoutingModule } from './todos-routing.module';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptHttpClientModule, TodosRoutingModule],
  declarations: [TodosComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TodosModule {}

