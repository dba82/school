import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dhb-configuration-panel',
  templateUrl: './configuration-panel.component.html',
  styleUrls: ['./configuration-panel.component.css']
})
export class ConfigurationPanelComponent implements OnInit {
  @Input() generator;

  constructor() { }

  ngOnInit() {
  }

  onclick() {
    console.log(this.generator)
  }

}
