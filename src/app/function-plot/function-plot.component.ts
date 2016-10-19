import { Component, OnInit, Input, Renderer, ViewChild, AfterViewInit } from '@angular/core';

var drawYAxis = function(canvas, ctx, x){
   ctx.beginPath();
   ctx.moveTo(x,5);
   ctx.lineTo(x,canvas.height);
   ctx.stroke();
}
var drawXAxis = function(canvas, ctx, y){
  ctx.beginPath();
  ctx.moveTo(0,y);
  ctx.lineTo(canvas.width-5,y);
  ctx.stroke();
}
var drawXAxisTriangle = function(canvas, ctx, xAxisHeight){
  ctx.beginPath();
  ctx.moveTo(canvas.width,xAxisHeight);
  ctx.lineTo(canvas.width-canvas.width*0.05,xAxisHeight+ canvas.height*0.025);
  ctx.lineTo(canvas.width-canvas.width*0.05,xAxisHeight- canvas.height*0.025);
  ctx.fill();
}
var drawYAxisTriangle = function(canvas, ctx, yAxisWidth){
  ctx.beginPath();
  ctx.moveTo(yAxisWidth,0);
  ctx.lineTo(yAxisWidth + canvas.width * 0.025, canvas.height * 0.05);
  ctx.lineTo(yAxisWidth - canvas.width * 0.025, canvas.height * 0.05);
  ctx.fill();
}                    
function linearScale(originalLength, projectedLength, offSet, x){
  return offSet + (x * projectedLength / originalLength);
};
function linearScale2D(originalWidth, originalHeight, projectedWidth,projectedHeight, offSetX, offSetY, x, y){
  return [
    linearScale(originalWidth, projectedWidth, offSetX, x),
    linearScale(originalHeight, projectedHeight, offSetY, y)
  ]
};
var plot = function(canvas, ctx, fnc, xRange, yrange, xrangeexceptions, graphColor){
  var xRangeLength = xRange[xRange.length-1]-xRange[0];
  var functionValues = [];
  var points = [];
  var stepSize = xRangeLength/(canvas.width);
  for (var i = xRange[0]; i<xRange[xRange.length-1]; i += stepSize){
    functionValues.push(fnc(i));
    points.push([i, fnc(i)]);
  }
  points = points.filter(x => x.every(y => !(/[abcdfghijklmnopqrstuvw]/).test(''+y)))
  functionValues = functionValues.filter(x => !(/[abcdfghijklmnopqrstuvw]/).test(''+x))
  var maxY = yrange ? yrange[1] : Math.max.apply(null, functionValues);
  var minY = yrange ? yrange[0] : Math.min.apply(null, functionValues);
  var maxX = xRange[xRange.length-1];
  var minX = xRange[0];

  var lengthNegativeXAxis = (minX < 0) ? Math.abs(minX) : 0;
  var lengthPositiveXAxis = (maxX > 0) ? maxX : 0;
  var lengthNegativeYAxis = (minY < 0) ? Math.abs(minY) : 0;
  var lengthPositiveYAxis = (maxY > 0) ? maxY : 0;

  var xAxisRatio = lengthNegativeXAxis/(lengthNegativeXAxis + lengthPositiveXAxis);
  var yAxisRatio = lengthNegativeYAxis/(lengthNegativeYAxis + lengthPositiveYAxis);    
  
  ctx.lineWidth = 5;
  ctx.fillStyle = 'gray';
  ctx.strokeStyle = 'gray';
  
  drawYAxis(canvas, ctx, canvas.width*xAxisRatio);
  drawXAxis(canvas,ctx, canvas.height-(canvas.height*yAxisRatio));
  drawXAxisTriangle(canvas, ctx,canvas.height-(canvas.height*yAxisRatio))
  drawYAxisTriangle(canvas, ctx,canvas.width*xAxisRatio)

  ctx.lineWidth = 5;
  ctx.fillStyle = graphColor || 'blue';
  ctx.strokeStyle = graphColor || 'blue';

  var plotty = p => {
      ctx.lineTo(p[0],canvas.height-p[1]);
      ctx.stroke();
  }
  if (xrangeexceptions){
    var indexes = [];
    for (var j =0; j<xrangeexceptions.length; j++){
      indexes.push(_.findIndex(points, function(x){return x[0] > xrangeexceptions[j]}));
    }
    var t = [points];
    var k = 0;
    while (k<indexes.length){
      var tmp = t.slice(0, t.length-1);
      var r = t[t.length-1];
      t = tmp.concat([r.slice(0,indexes[k]),r.slice(indexes[k])])
      k++;
    }
    for (var range in t){
      var tt = t[range].map(p => linearScale2D(maxX-minX, maxY-minY ,canvas.width, canvas.height,canvas.width*(xAxisRatio), canvas.height*(yAxisRatio), p[0], p[1]));
      ctx.beginPath();
      tt.slice(1).forEach(plotty);
    }
  } else {
    points = points.map(p => linearScale2D(maxX-minX, maxY-minY ,canvas.width, canvas.height,canvas.width*(xAxisRatio), canvas.height*(yAxisRatio), p[0], p[1]));
    ctx.beginPath();
    points.slice(1).forEach(plotty);    
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
    plot(this.can.nativeElement, this.ctx, this.f, this.xrange, this.yrange, this.xrangeexceptions, this.color);
  }
}
