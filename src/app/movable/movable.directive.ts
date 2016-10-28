import { Directive, HostListener, Input, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';
    //TODO: wenn für moveWithX sowas wie 'style.top' gesetzt wird, klappt's nicht, wegen dem Pfad ...
    //TODO: bei "move" ist der SVG viel zu rechenintensiv, das kann deutlich reduziert werden, denke ich
let isSVG = (element) =>  element.namespaceURI && element.namespaceURI.slice(-3) === 'svg';

@Directive({ selector: '[dhb-movable]' })
export class MovableDirective implements OnInit {
  @Input('move-with-x') moveWithX = '';
  @Input('move-with-y') moveWithY = '';
  @Input('max-x') maxX;
  @Input('max-Y') maxY;
  @Input('min-x') minX;
  @Input('min-Y') minY;
  
  @Output() moved = new EventEmitter();

  private anchor = { element: [[], []], mouse: [] };
  private moving = false;
  private moveWith = [[], []];

  constructor( private el : ElementRef ) { }

  ngOnInit(){
    this.moveWith = [this.moveWithX, this.moveWithY].map( a => {
      return a.split(',').map( b => {
        return b.trim()
      })
    })
  }

  @HostListener('mousedown', ['$event'])
  initiateMovement(e) {
    this.anchor = {
      element: this.moveWith.map( a => {
        return a.map(b => {
          return +this.el.nativeElement.getAttribute(b);
        })
      }),
      mouse: [e.pageX, e.pageY]
    };
    this.moving = true;
  }

  @HostListener('window:mouseleave')
  @HostListener('window:mouseup')
  stopMovement(e) {
    this.moving = false;
  }

  @HostListener('window:mousemove', ['$event'])
  move(e) {
    let newV;
    if (this.moving){
      this.anchor.element.forEach( (a, i) => {
        a.forEach( (b, j) => {
          let xOrY = (i === 0 ? 'X' : 'Y');
          newV = (+this.anchor.mouse[i] - +e['page' + xOrY]);
          if (isSVG(this.el.nativeElement)){
            let point = this.el.nativeElement.ownerSVGElement.createSVGPoint();
            point.x = newV;
            point.y = newV;
            let matrix = this.el.nativeElement.ownerSVGElement.getScreenCTM();
            matrix = matrix.inverse();
            point = point.matrixTransform(matrix);
            newV = point[xOrY.toLowerCase()];
          }
          newV = +b - newV;
          if ( newV <= +this['max' + xOrY] && newV >= +this['min' + xOrY]){
            this.el.nativeElement.setAttribute(this.moveWith[i][j], newV);
            this.moved.emit(newV);
          }
        })
      });
    }
  }
}