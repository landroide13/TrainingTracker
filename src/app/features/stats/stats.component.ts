import { Component } from '@angular/core';
import { Exercise, Todo, Workout } from '../../core/models/todo.model';
import { ExerciseService } from '../add-todo/exercise.service';
import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'ns-stats',
  templateUrl: 'stats.component.html', 
})
export class StatsComponent{

  constructor(private exeServ: ExerciseService){}

  }