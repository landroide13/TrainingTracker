import { Component, OnInit } from '@angular/core'

import { RouterExtensions } from '@nativescript/angular';
import { ItemEventData } from '@nativescript/core'
import { Exercise, Todo, Workout } from '../../core/models/todo.model';
import { ExerciseService } from '../add-todo/exercise.service';
import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'ns-workout',
  templateUrl: 'workout.component.html', 
})
export class WorkoutComponent{

  constructor(private exeServ: ExerciseService){}

  }