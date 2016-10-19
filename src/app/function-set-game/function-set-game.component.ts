import { Component, OnInit } from '@angular/core';

import { SetFunctionsService } from '../set-functions.service'

@Component({
  selector: 'dhb-function-set-game',
  templateUrl: './function-set-game.component.html',
  styleUrls: ['./function-set-game.component.css'],
  providers: [ SetFunctionsService ]
})
export class FunctionSetGameComponent implements OnInit {
  private functions;
  private selectedCards = [];
  private capturedCards = [];

  constructor(private fncs : SetFunctionsService) {
    this.functions =  _.shuffle(_.range(fncs.functions.length*4)).map((x)=>{return {f: fncs.functions[(x/4) | 0], n: x % 4}})
  }
  checkCards(x) {
        if (x.every(function(t){return t.f === x[0].f})){
            this.correctSet(x)
        } else {
            this.incorrectSet(x)
        }
  }

  correctSet (data) {
    data.forEach(function(x){
            x.captured = true;
            x.selected = false;
    });  
    this.selectedCards = [];
    this.capturedCards = this.capturedCards.concat(data);
  }
  
  incorrectSet(data) {
    this.selectedCards = [];
    data.forEach(function(x){
      x.selected = false;
    });
  }

  selectCard(x) {
    if (!x.selected && !x.captured
        && this.selectedCards.length < 4
        && this.selectedCards.every(function(y){return y.n !== x.n})){
        x.selected = true;
        this.selectedCards.push(x);
    } else if(this.selectedCards.indexOf(x) !== -1){
        x.selected = false;
        this.selectedCards.splice(this.selectedCards.indexOf(x),1)
    }
    if (this.selectedCards.length === 4){
      this.checkCards(this.selectedCards);
    }
  }

  ngOnInit() { }

}