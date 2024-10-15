import { Component } from '@angular/core'

import { RouterExtensions } from '@nativescript/angular';
import { Router } from '@angular/router';

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

  constructor(private exeServ: ExerciseService, 
              private fb: FormBuilder, private router: RouterExtensions){}

    ngOnInit(): void{
      this.excerciseForm = this.fb.group({
        exname: new FormControl('', Validators.required),
        sets: new FormControl('', Validators.required),
        reps: new FormControl('', Validators.required),
        weights: new FormControl('', Validators.required),
      })
    }

    dialog(msg: string){
      Dialogs.alert({
        title: 'Exercise',
        message: `${msg}`,
        okButtonText: 'OK',
        cancelable: true,
      })
    }

    goTodos() {
      this.router.navigate([{ outlets: { todosTab: ['todos'] } }], {
        transition: {
          name: 'fade',
          duration: 300,
        },
      });
    }

    clear(){

    }

    onSubmit() {
      if(this.excerciseForm.valid){
        const exerciseData = this.excerciseForm.value;
        this.exeServ.addExercise(exerciseData);
        this.goTodos();
        this.dialog(this.excerciseForm.value.exname + " Added !")
        
        this.excerciseForm.reset();
      }else{
        this.dialog("Form Invalid !!");
      }
      
    }

    

}