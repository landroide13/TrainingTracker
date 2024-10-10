import { Component } from '@angular/core'

import { RouterExtensions } from '@nativescript/angular';
import { ItemEventData } from '@nativescript/core'
import { Exercise, Todo } from '../../core/models/todo.model';
import { Dialogs } from '@nativescript/core'
import { ExerciseService } from './exercise.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'ns-add-todo',
  templateUrl: './add-todo.component.html', 
})
export class AddTodoComponent {

  excerciseForm: FormGroup;

  constructor(private exeServ: ExerciseService, private fb: FormBuilder ){}

    ngOnInit(): void{
      this.excerciseForm = this.fb.group({
        exname: new FormControl('', Validators.required),
        sets: new FormControl('', Validators.required),
        reps: new FormControl('', Validators.required),
        weights: new FormControl('', Validators.required),
      })
    }

    dialog(){
      Dialogs.alert({
        title: 'Exercise',
        message: 'Exercise Added !',
        okButtonText: 'OK',
        cancelable: true,
      })
    }

    onSubmit() {
     this.dialog()
    }

}