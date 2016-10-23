import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[dhb-movable]'
})
export class MovableDirective {
  @Input('dhb-movable') coords; 

  private tracking = false;
  private anchor;
  
  constructor(private el: ElementRef) { 
    
   }

  @HostListener('mousedown', ['$event'])
  setAnchor(e) {
    this.anchor = {
      mouse: [e.screenX, e.screenY],
      element: this.coords.map((co) => {
        return co.map(k => {
          return +this.el.nativeElement.getAttribute(k)
        })
      })
    }
    this.tracking = true;
  }

  @HostListener('window:mouseup', ['$event'])
  stopTracking() {
    this.tracking = false;
  }

  @HostListener('window:mousemove', ['$event']) 
  update(e) {
    if (this.tracking) {
      this.coords.forEach((c,i) => {
        c.forEach((k,j) => {
          this.el.nativeElement.setAttribute(k, +this.anchor.element[i][j] - (+this.anchor.mouse[i] - +e['screen' + (i === 0 ? 'X' : 'Y')]));
        })
      })
    }
  }
}
