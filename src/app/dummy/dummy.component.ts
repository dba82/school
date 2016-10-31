import { Component, OnInit } from '@angular/core';
import { TrueFalseQuestionsService } from '../true-false-questions.service';

@Component({
  selector: '.dhb-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css'],
  providers: [TrueFalseQuestionsService]
})
export class DummyComponent implements OnInit {


  constructor(private questions : TrueFalseQuestionsService) { }

  ngOnInit() {
  }

}
