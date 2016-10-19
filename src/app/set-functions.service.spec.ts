/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SetFunctionsService } from './set-functions.service';

describe('Service: SetFunctions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetFunctionsService]
    });
  });

  it('should ...', inject([SetFunctionsService], (service: SetFunctionsService) => {
    expect(service).toBeTruthy();
  }));
});
