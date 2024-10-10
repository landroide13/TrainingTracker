import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'

import { AddTodoComponent } from './add-todo.component'

import { NativeScriptHttpClientModule } from '@nativescript/angular';
import { AddTodoRoutingModule } from './add-todo-routing.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [NativeScriptCommonModule, 
            NativeScriptHttpClientModule, 
            AddTodoRoutingModule, 
            ReactiveFormsModule,
            NativeScriptFormsModule],
  declarations: [AddTodoComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AddTodoModule {}