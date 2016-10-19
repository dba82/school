import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';

import { TrueFalseQuestionsComponent } from '../true-false-questions/true-false-questions.component';
import { DummyComponent } from '../dummy/dummy.component';
import { FunctionSetGameComponent } from '../function-set-game/function-set-game.component';

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
    ])
  ],
  declarations: [
    TrueFalseQuestionsComponent,
    DummyComponent
  ]
})
export class AppRoutingModule { }
