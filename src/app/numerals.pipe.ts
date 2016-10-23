import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numerals'
})
export class NumeralsPipe implements PipeTransform {

  transform(value: any, arabicOrEuropean: string): any {
    let mapToArabic = (v) => {
      let map = {
        
      }
    }
    return arabicOrEuropean === 'arabic' ? mapToArabic(value) : value;
  }

}
