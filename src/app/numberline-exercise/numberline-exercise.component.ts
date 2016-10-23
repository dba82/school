import { Component, OnInit, AfterViewInit, EventEmitter, ViewChild } from '@angular/core';

class ExerciseGenerator {
  public config = { };
  public taskParameters = {};
  public ran = false;
  public didRun = new EventEmitter();
  private historyOfTaskParameters = [];
  
  constructor(public metaConfig, private createTaskParameters) { }
  
  generate() {
    this.taskParameters = this.createTaskParameters(this.config);
    this.historyOfTaskParameters.push(this.taskParameters);
    this.ran = true;
    this.didRun.emit(this.taskParameters);
  }
}

@Component({
  selector: 'dhb-numberline-exercise',
  templateUrl: './numberline-exercise.component.html',
  styleUrls: ['./numberline-exercise.component.css']
})
export class NumberlineExerciseComponent implements OnInit, AfterViewInit {
  @ViewChild('nl') nl;

  private generator = new ExerciseGenerator([
      {
        name: 'Zahlenbereich',
        property: 'range',
        type: 'number'
      },
      {
        name: 'Ende',
        property: 'end',
        type: 'number'
      },
      {
        name: 'Hauptmarkierungsschrittgröße',
        property: 'majorSteps',
        type: 'number'
      },
      {
        name: 'Nebenmarkierungsschrittgröße',
        property: 'mediumSteps',
        type: 'number'
      },
      {
        name: 'Schrittgröße',
        property: 'minorSteps',
        type: 'number'
      }
    ], function(config){ 
        let result = {
          start: undefined,
          end: undefined,
          majorSteps: undefined,
          minorSteps: undefined,
          mediumSteps: undefined,
          fixedMarks: []
        }
        /*
        pre-generation-constraints: (gehören eigentlich nicht hier her)
          minorSteps < mediumSteps < majorSteps
          majorSteps % mediumSteps === 0

        constraints:
          start < (end - minorSteps)
          fixedMarks.every(x=> start <= x <= end)
          minorSteps >= (end - start)/100;
        */
        result.start = (Math.random() * config.range) | 0;
        result.end = result.start + (Math.random() * (config.range - result.start)) | 0;
        result.majorSteps = config.majorSteps;
        result.mediumSteps = config.mediumSteps;
        result.minorSteps = config.minorSteps;
        result.fixedMarks = [result.start, result.end]
        return result;
      })

  constructor() { }

  ngAfterViewInit(){
    this.generator.didRun.subscribe((params) => {
      this.nl.recalculate(params);
    })
  }

  ngOnInit() {
  }

}
