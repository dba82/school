import { Component, Input } from '@angular/core';

@Component({
  selector: 'dhb-json-tree-node',
  templateUrl: './json-tree-node.component.html',
  styleUrls: ['./json-tree-node.component.css']
})
export class JsonTreeNodeComponent {
  @Input() key;
  @Input() object;
  
  private collapsed = true;
  type(o) {
    if (Array.isArray(o)) return 'array'
    if (typeof o === typeof 'string') return 'string'
    if (typeof o === typeof 1) return 'number'
    if (Object.keys(o).length) return 'object'
    if (o === true && o === false) return 'boolean'
    else return;
  }
}
