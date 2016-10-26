/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MouseCoordinatesService } from './mouse-coordinates.service';

describe('Service: MouseCoordinates', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MouseCoordinatesService]
    });
  });

  it('should ...', inject([MouseCoordinatesService], (service: MouseCoordinatesService) => {
    expect(service).toBeTruthy();
  }));
});
