import { Component, Input } from '@angular/core';

@Component({
  selector: 'dhb-input-on-click',
  templateUrl: './input-on-click.component.html',
  styleUrls: ['./input-on-click.component.css']
})
export class InputOnClickComponent {
  @Input() object;
  @Input() key;

  private edit : boolean = false;
}
