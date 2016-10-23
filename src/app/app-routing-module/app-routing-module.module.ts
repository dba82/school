import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';

import { TrueFalseQuestionsComponent } from '../true-false-questions/true-false-questions.component';
import { DummyComponent } from '../dummy/dummy.component';
import { FunctionSetGameComponent } from '../function-set-game/function-set-game.component';
import { NumberlineExerciseComponent } from '../numberline-exercise/numberline-exercise.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', 
        component: DummyComponent },

      { path: 'ephase/wahrfalsch', 
        component: TrueFalseQuestionsComponent },

      { path: 'ephase/funktionenset', 
        component: FunctionSetGameComponent },

      { path: 'klasse5/zahlenstrahl', 
        component: NumberlineExerciseComponent },    
    ])
  ],
  declarations: [ ]
})
export class AppRoutingModule { }
