import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular'
import { TodosComponent } from './features/todos/todos.component'
import { AddTodoComponent } from './features/add-todo/add-todo.component'

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/(todosTab:todos/default//addTab:add-todo/default)', 
    pathMatch: 'full' 
  },
  {
    path: 'todos',
    loadChildren: () => 
      import('../app/features/todos/todos.module').then((m) => m.TodosModule),
    component: NSEmptyOutletComponent,
    outlet: 'todosTab',
  },
  {
    path: 'add-todo',
    loadChildren: () => 
      import('../app/features/add-todo/add-todo.module').then((m) => m.AddTodoModule),
    component: NSEmptyOutletComponent,
    outlet: 'addTab',
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
