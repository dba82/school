import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dhb-function-description',
  templateUrl: './function-description.component.html',
  styleUrls: ['./function-description.component.css']
})
export class FunctionDescriptionComponent implements OnInit {
  @Input() f;

  constructor() { }
  
  ngOnInit() {
  }

}
