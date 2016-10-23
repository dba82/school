import { NumberlineComponent } from '../../numberline/numberline.component';

export class NumberlineExercise {
  private numberline : NumberlineComponent;

  private metaConfiguration =     {
      numberRange: {
        type: 'number',
        min: 10,
        max: 1000000000000,
        step: (x) => x * 10,
        defaults: 10
      },
      start: {
        type: 'select',
        options: ['0', 'major', 'medium', 'minor', 'any'],
        defaults: ['0']
      },
      minorStepSize: {
        type: 'select',
        options: ['1', 'power of ten', 'multiple of power of ten', 'any'],
        defaults: ['1']
      },
      mediumStepsize : {
        type: 'select',
        options: ['5', 'power of ten', 'multiple of power of ten', 'any'],
        constraints: (x, i) => {
          if (this.minorStepSize.selectedIndex > 0 && i === 0) return false;
          return true;
        },
        defaults: ['5', 'power of ten']
      },
      majorStepsize : {
        type: 'select',
        options: ['10', 'power of ten', 'multiple of power of ten', 'any'],
        constraints: (x, i) => {
          if (this.minorStepSize.selectedIndex > 0 && i === 0) return false;
          return true;
        },
        defaults: ['10', 'power of ten']
      },
      marks: {
        type: 'multiple-select',
        options: ['major', 'medium', 'minor']
      },
      textmarksOn: {
        type: 'select',
        options: ['major', 'medium', 'minor', 'any'],
        constraints: (x, i) => {
          if (x !== 'any' && this.marks.indexOf(x) === -1) return false;
          return true;
        },
        necessary: true,
        defaults: [['major'], ['medium'], ['minor'], ['any']]
      },
      distanceBetweenTextMarks: {
        type: 'select',
        options: ['1 major', 'multiple of major', 'multiple of medium', 'multiple of minor', 'any'],
        constraints: (x, i) => {
          return true;
        }
      },
      numberOfMajormarks: {
        type: 'number',
        min: 0,
        max: 20,
        step: (x) => x + 1,
        defaults: 2
      }
  }

  constructor(configuration) { 

  this.numberline.start within configuration.numberRange
  this.numberline.end within configuration.numberRange
  (this.numberline.end - this.numberline.start) % configuration.minorStepSize === 0
  this.numberline.end - this.numberline.start <= configuration.numberOfMajormarks * configuration.majorStepSize

  }

}