import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: '[dhb-numberline]',
  templateUrl: './numberline.component.html',
  styleUrls: ['./numberline.component.css']
})
export class NumberlineComponent implements OnInit, OnChanges {
  @Input() length : number = 500;
  @Input() start : number = 3;
  @Input() end : number = 100;

  @Input('major-steps') majorSteps = 10;
  @Input('medium-steps') mediumSteps = 5;
  @Input('minor-steps') minorSteps = 1;

  @Input('fixed-marks') fixedMarks = [0, 10, 100];
  @Input('free-marks') freeMarks = [3, 99];

  @Input('undirected-ranges') undirectedRanges = [];
  @Input('backward-ranges') backwardRanges;
  @Input('forward-ranges') forwardRanges;

  private stepSize : number;

  private majorMarks = [];
  private minorMarks = [];
  private mediumMarks = [];
  
  constructor() { }

  ngOnChanges() {
    this.recalculate();
  }

  ngOnInit() {
    this.recalculate();
  }

  getXCoordinateFor(n) {
    return (n -  +this.start) * this.stepSize;
  }
  
  recalculate(data?) {
    if (data) {
      this.end = data.end || this.end;
      this.start = data.start || this.start;
      this.majorSteps = data.majorSteps || this.majorSteps;
      this.mediumSteps = data.mediumSteps || this.mediumSteps;
      this.minorSteps = data.minorSteps || this.minorSteps;
      this.freeMarks = data.freeMarks || this.freeMarks;
    }
    this.stepSize = (+this.length - 0.5)/(+this.end - +this.start);
    this.majorMarks = [];
    this.minorMarks = [];
    this.mediumMarks = [];
    for (let i = +this.start; i <= +this.end; i += +this.minorSteps){
      if (i % this.majorSteps === 0) this.majorMarks.push((i -  +this.start) * this.stepSize);
      else if (i % this.mediumSteps === 0) this.mediumMarks.push((i -  +this.start) * this.stepSize);
      else this.minorMarks.push((i -  +this.start) * this.stepSize);
    }
  }
  clickedOn(i) { }
}

let doIntersect = (range1, range2) => range1[1] > range2[0] && range1[0] < range2[1];