import { Component, OnInit } from '@angular/core'

import { RouterExtensions } from '@nativescript/angular';
import { ItemEventData } from '@nativescript/core'
import { Exercise, Todo } from '../../core/models/todo.model';
import { ExerciseService } from '../add-todo/exercise.service';
import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'ns-todos',
  templateUrl: 'todos.component.html', 
})
export class TodosComponent implements OnInit{

  exercises: Observable<Exercise[]>

  constructor(private exeServ: ExerciseService){}

  getData(){
    this.exercises = this.exeServ.getExercises();
  }

  ngOnInit(){
    this.getData();
  }
    
}