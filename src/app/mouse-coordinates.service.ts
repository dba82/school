import { Injectable, HostListener } from '@angular/core';

@Injectable()
export class MouseCoordinatesService {
  public coordinates;
  constructor() { }

  @HostListener('window:mousemove', ['$event'])
  setCoordinates(e) {
    this.coordinates = [e.screenX, e.screenY];
    console.log(this.coordinates)
  }

}
