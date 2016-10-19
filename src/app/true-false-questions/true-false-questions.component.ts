import { Component, OnInit } from '@angular/core';
import { TrueFalseQuestionsService } from '../true-false-questions.service'

@Component({
  selector: 'dhb-true-false-questions',
  templateUrl: './true-false-questions.component.html',
  styleUrls: ['./true-false-questions.component.css'],
  providers: [TrueFalseQuestionsService]
})
export class TrueFalseQuestionsComponent implements OnInit {
  private questions;
  private show;
  private brutto = 0;
  private netto;

  constructor( questionservice : TrueFalseQuestionsService) { 
    this.questions = [];
    for (let key in questionservice.questions){
      this.questions = this.questions.concat(questionservice.questions[key].questions)
    }    
    this.questions = _.shuffle(this.questions);
  }

  updatePoints(){
    this.brutto = this.questions.filter(this.isCorrect).length;
    this.netto = this.brutto - this.questions.filter(this.isIncorrect).length;
  }

  setAnswer(t, value) { 
    t.sanswer = value;
    this.updatePoints();
  }

  isIncorrect(t) {
    return t.sanswer !== undefined && t.sanswer !== t.answer;
  }

  isCorrect(t) {
    return t.sanswer !== undefined && t.sanswer === t.answer;
  }

  ngOnInit() {
  }

}
