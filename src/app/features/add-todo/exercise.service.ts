import { Injectable, NgZone } from '@angular/core';

import { Exercise } from '../../core/models/todo.model';

import { FirebaseService } from '../../core/services/firebase.service';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  
  constructor(private fireBase: FirebaseService) {}

  getExercises() {
    return this.fireBase.getFirestore().collection('exercises').get();
  }

  addExercise(exercise: Exercise) {
    return this.fireBase.getFirestore().collection('exercises').add(exercise);
  }



}