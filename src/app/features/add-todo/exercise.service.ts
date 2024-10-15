import { Injectable, NgZone } from '@angular/core';

import { Exercise } from '../../core/models/todo.model';

import { FirebaseService } from '../../core/services/firebase.service';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {

  exercises: Exercise[];
  
  constructor(private fireBase: FirebaseService) {}

  getExercises(): Observable<Exercise[]> {
    return from( 
      this.fireBase.getFirestore().collection('exercises').get().then((snapshot) => {
        return snapshot.docs.map((doc) => {
          const data = doc.data();
          return new Exercise(doc.id, data.exname, data.sets, data.reps, data.weights);
        });
    }))
  }

  addExercise(exercise: Exercise) {
    return this.fireBase.getFirestore().collection('exercises').add(exercise);
  }



}