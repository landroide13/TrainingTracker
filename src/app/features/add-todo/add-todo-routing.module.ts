import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { AddTodoComponent } from './add-todo.component'

const routes: Routes = [
  { path: 'default', component: AddTodoComponent }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class AddTodoRoutingModule {}