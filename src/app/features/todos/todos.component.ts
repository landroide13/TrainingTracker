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

  exercises: Exercise[]

  constructor(private exeServ: ExerciseService){}

  getData(){
    this.exeServ.getExercises().subscribe(res => {
      this.exercises = res
    });
  }

  ngOnInit(){
    this.getData();
  }

  // ngOnChanges(){
  //   this.getData();
  // }
    
}