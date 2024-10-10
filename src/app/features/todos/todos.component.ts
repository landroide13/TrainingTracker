import { Component } from '@angular/core'

import { RouterExtensions } from '@nativescript/angular';
import { ItemEventData } from '@nativescript/core'
import { Todo } from '../../core/models/todo.model';

@Component({
  moduleId: module.id,
  selector: 'ns-todos',
  templateUrl: 'todos.component.html', 
})
export class TodosComponent {

    constructor(){}

    ngOnInit(){}

    navigateToAddTodo(){}

    addTask(){}

    completeTask(task){}

    
}