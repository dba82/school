import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[dhb-numberline]',
  templateUrl: './numberline.component.html',
  styleUrls: ['./numberline.component.css']
})
export class NumberlineComponent implements OnInit {
  @Input() length : number;
  @Input() start : number;
  @Input() end : number;
  
  public majorMarks = [];
  public minorMarks = [];
  
  constructor() {  }

  ngOnInit() {
    let step = this.length/(this.end - this.start);
    for (let i = 0; i < +this.end - +this.start; i += 1){
      if (i % 5 === 0 && i % 2 === 0) this.majorMarks.push(i*step);
      else this.minorMarks.push(i*step);
    }
  }

  clickedOn(i) {
    console.log(i);
    console.log(+this.start + +i);
  }

  coordinatesFor(n) {
    
  }
}
