import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDiscount'
})
export class CalcDiscountPipe implements PipeTransform {

  transform(value: number, discount:number = 1): string {
    return (value - (value * (discount/100))).toFixed(2);
  }

}
