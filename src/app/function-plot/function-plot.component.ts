import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';

let drawPolyline = (canvas, ctx, points, strokeOrFill = 'stroke', style?) =>{
   for (let key in style) ctx[key] = style[key];
   ctx.beginPath();
   ctx.moveTo(points[0][0], points[0][1]);
   for (let point of points.slice(1)) ctx.lineTo(point[0], point[1]);
   ctx[strokeOrFill]();
}
let drawVertical = (canvas, ctx, x, style) => drawPolyline(canvas, ctx, [[x, 5], [x, canvas.height]], 'stroke', style);

let drawHorizontal = (canvas, ctx, y, style) => drawPolyline(canvas, ctx,[[0, y], [canvas.width-5, y]], 'stroke', style);

let drawXAxisTriangle = (canvas, ctx, xAxisHeight, style) => {
  drawPolyline(canvas, ctx, [
    [canvas.width,xAxisHeight], 
    [canvas.width-canvas.width*0.05,xAxisHeight+ canvas.height*0.025], 
    [canvas.width-canvas.width*0.05,xAxisHeight- canvas.height*0.025]], 
    'fill',
    style)
}
let drawYAxisTriangle = (canvas, ctx, yAxisWidth, style) => {
  drawPolyline(canvas, ctx, [
    [yAxisWidth,0], 
    [yAxisWidth + canvas.width * 0.025, canvas.height * 0.05], 
    [yAxisWidth - canvas.width * 0.025, canvas.height * 0.05]], 
    'fill',
    style)
}
      
let linearScale = (originalLength, projectedLength, offSet, x) => offSet + (x * projectedLength / originalLength);

let linearScale2D = (originalWidth, originalHeight, projectedWidth, projectedHeight, offSetX, offSetY, x, y) => {
  return [
    linearScale(originalWidth, projectedWidth, offSetX, x),
    linearScale(originalHeight, projectedHeight, offSetY, y)]
};

let calculatePlotParameters = (canvas, ctx, fnc, xRange, yrange, xrangeexceptions) => {
  let functionValues : number[] = [];
  let points : [number, number][] = [];
  let stepSize : number = (xRange[1]-xRange[0])/(canvas.width);
  
  for (let i = xRange[0]; i < xRange[1]; i += stepSize){
    functionValues.push(fnc(i));
    points.push([i, fnc(i)]);
  }
  points = points.filter(x => x.every(y => !(/[abcdfghijklmnopqrstuvw]/).test(''+y)));
  functionValues = functionValues.filter(x => !(/[abcdfghijklmnopqrstuvw]/).test(''+x))

  let maxY : number = yrange ? yrange[1] : Math.max.apply(null, functionValues);
  let minY : number = yrange ? yrange[0] : Math.min.apply(null, functionValues);
  let maxX : number = xRange[xRange.length-1];
  let minX : number = xRange[0];
  let lengthNegativeXAxis : number = (minX < 0) ? Math.abs(minX) : 0;
  let lengthPositiveXAxis : number = (maxX > 0) ? maxX : 0;
  let lengthNegativeYAxis : number = (minY < 0) ? Math.abs(minY) : 0;
  let lengthPositiveYAxis : number = (maxY > 0) ? maxY : 0;

  let ranges = [points];
  if (xrangeexceptions){
    let indexes = [];
    for (let exception of xrangeexceptions){
      indexes.push(_.findIndex(points, x => x[0] > exception));
    }
    for (let index of indexes){
      let newLastRange = ranges.slice(0, ranges.length-1);
      let lastRange = ranges[ranges.length-1];
      ranges = newLastRange.concat([lastRange.slice(0, index),lastRange.slice(index)])
    }
  }
  return {
     canvas: canvas,
     ctx: ctx,
     ranges: ranges,
     xAxisRatio : lengthNegativeXAxis/(lengthNegativeXAxis + lengthPositiveXAxis),
     yAxisRatio: lengthNegativeYAxis/(lengthNegativeYAxis + lengthPositiveYAxis),
     maxX: maxX,
     maxY: maxY,
     minX: minX,
     minY: minY
  }
}

let drawSquareGrid = (style : any = {fillStyle : 'grey', strokeStyle : 'grey', lineWidth: 5}) => {

}

let drawYAxisTicks = (params, style : any = {fillStyle : 'grey', strokeStyle : 'grey', lineWidth: 5}) => {
    let yPosOfXAxis = params.canvas.height-(params.canvas.height*params.yAxisRatio);
    /* ...........*/
    drawPolyline(params.canvas, params.ctx, [], 'stroke', style);
}

let drawXAxisTicks = (style : any = {fillStyle : 'grey', strokeStyle : 'grey', lineWidth: 5}) => {
  
}
let drawAxes = (params, style : any = {fillStyle : 'grey', strokeStyle : 'grey', lineWidth: 5} ) => {
  drawVertical(params.canvas, params.ctx, params.canvas.width*params.xAxisRatio, style);
  drawHorizontal(params.canvas,params.ctx, params.canvas.height-(params.canvas.height*params.yAxisRatio), style);
  drawXAxisTriangle(params.canvas, params.ctx, params.canvas.height-(params.canvas.height*params.yAxisRatio), style);
  drawYAxisTriangle(params.canvas, params.ctx, params.canvas.width*params.xAxisRatio, style);
}

let plot = (params, xrangeexceptions, style : any = {fillStyle : 'blue', strokeStyle : 'blue', lineWidth: 5} ) => {
  for (let range of params.ranges){
    range = range.map(p => linearScale2D(params.maxX-params.minX, params.maxY-params.minY ,params.canvas.width, params.canvas.height,params.canvas.width*(params.xAxisRatio), params.canvas.height*(params.yAxisRatio), p[0], p[1]));
    drawPolyline(params.canvas, params.ctx, range.slice(1).map(x => [x[0], params.canvas.height-x[1]]), 'stroke', style)
  }
};

@Component({
  selector: 'dhb-function-plot',
  templateUrl: './function-plot.component.html',
  styleUrls: ['./function-plot.component.css']
})
export class FunctionPlotComponent implements AfterViewInit {
  @ViewChild('can') can;
  
  @Input() width = 400;
  @Input() height = 400;
  @Input() f = (x)=>x*x;
  @Input('x-range') xrange = [-8,8];
  @Input('x-range-exceptions') xrangeexceptions;
  @Input('y-range') yrange;
  @Input() color;
  
  private ctx;

  ngAfterViewInit() {
    this.ctx = this.can.nativeElement.getContext('2d');
    this.can.nativeElement.height = +this.height;
    this.can.nativeElement.width = +this.width;
    let params = calculatePlotParameters(this.can.nativeElement, this.ctx, this.f, this.xrange, this.yrange, this.xrangeexceptions)
    drawAxes(params);
    plot(params, this.xrangeexceptions, {strokeStyle: this.color, lineWidth: 5});
  }
}
