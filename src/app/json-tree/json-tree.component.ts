import { Component, Input } from '@angular/core';

@Component({
  selector: 'dhb-json-tree',
  templateUrl: './json-tree.component.html',
  styleUrls: ['./json-tree.component.css']
})
export class JsonTreeComponent {
  @Input() object = {};
}
