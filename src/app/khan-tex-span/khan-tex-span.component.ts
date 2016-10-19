import { Component, OnInit, ElementRef, Input } from '@angular/core';

declare var katex: any;

@Component({
  selector: 'dhb-khan-tex-span',
  templateUrl: './khan-tex-span.component.html',
  styleUrls: ['./khan-tex-span.component.css']
})

export class KhanTexSpanComponent implements OnInit {
  @Input() expression;

  constructor(private myElement : ElementRef) { }

  ngOnInit() {
    katex.render(this.expression, this.myElement.nativeElement)
  }

}
