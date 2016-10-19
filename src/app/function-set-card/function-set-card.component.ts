import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dhb-function-set-card',
  templateUrl: './function-set-card.component.html',
  styleUrls: ['./function-set-card.component.css']
})
export class FunctionSetCardComponent implements OnInit {
  @Input() f;

  constructor() { }

  ngOnInit() {  }

}
