/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrueFalseQuestionsService } from './true-false-questions.service';

describe('Service: TrueFalseQuestions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrueFalseQuestionsService]
    });
  });

  it('should ...', inject([TrueFalseQuestionsService], (service: TrueFalseQuestionsService) => {
    expect(service).toBeTruthy();
  }));
});
