import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[dhb-function-value-table]',
  templateUrl: './function-value-table.component.html',
  styleUrls: ['./function-value-table.component.css']
})
export class FunctionValueTableComponent implements OnInit {
  @Input() f;
  @Input() range;
  @Input() stepsize;
  @Input() numbers;

  constructor() { }
  
  valueTable (f, arr){
    return arr.map((x)=> f(x))
              .map((x)=> (''+x).replace('.', ','))
              .map((x) => {
                if (x === 'NaN' || x === 'Infinity'){
                  return '-'
                }
                if (/,/.test(x)){
                  x = x.split(',');
                  if (x[1].length > 1){
                    return '~' + x[0] + ',' + x[1].slice(0,1)
                  } else {
                    return x.join(',')
                  }
                } else {
                  return x
                }
              })
  }

  ngOnInit() {
    if (!this.numbers){
      this.numbers = [];
      this.stepsize = this.stepsize || 1;
      for (var i = this.range[0]; i<= this.range[1]+1; i+=this.stepsize){
        this.numbers.push(i);
      }
    } 
  }

}
