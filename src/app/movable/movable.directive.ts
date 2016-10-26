import { Directive, HostListener, Input, ElementRef, Renderer, Output, EventEmitter, OnInit } from '@angular/core';

    //TODO: wenn für moveWithX sowas wie 'style.top' gesetzt wird, klappt's nicht, wegen dem Pfad ...

let isSVG = (element) =>  element.namespaceURI.slice(-3) === 'svg';

@Directive({
  selector: '[dhb-movable]',
  exportAs: 'movable'
})
export class MovableDirective implements OnInit{
  @Input('move-with-x') moveWithX = '';
  @Input('move-with-y') moveWithY = '';
  @Input('max-x') maxX;
  @Input('max-Y') maxY;
  @Input('min-x') minX;
  @Input('min-Y') minY;
  
  private anchor = { element: [[], []], mouse: [] };
  private moving = false;
  private moveWith = [[], []];

  constructor( private el : ElementRef, private renderer : Renderer) { }

  ngOnInit(){
    console.log(this.el.nativeElement)
    this.moveWith = [this.moveWithX.split(',').map( x => x.trim()), this.moveWithY.split(',').map( x => x.trim())]
  }

  @HostListener('click', ['$event'])
  initiateMovement(e) {
    this.anchor = {
      element: this.moveWith.map( a => {
        return a.map(b => {
          return +this.el.nativeElement.getAttribute(b);
        })
      }),
      mouse: [e.screenX, e.screenY]
    };
    this.moving = true;
  }

  @HostListener('window:mouseleave')
  @HostListener('mouseup')
  stopMovement(e) {
    this.moving = false;
  }

  @HostListener('window:mousemove', ['$event'])
  move(e) {
    if (this.moving){
      this.anchor.element.forEach( (a, i) => {
        a.forEach( (b, j) => {
          let newV = +b - (+this.anchor.mouse[i] - +e['screen' + (i === 0 ? 'X' : 'Y')]);
          if ( newV <= +this['max' + (i === 0 ? 'X' : 'Y')] && newV >= +this['min' + (i === 0 ? 'X' : 'Y')]){
            this.el.nativeElement.setAttribute(this.moveWith[i][j], newV);
          }
        })
      });
    }
  }

}