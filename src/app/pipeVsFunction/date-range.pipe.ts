import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getName'
})
export class GetNamePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    console.log("============Pipe=========");
    return "Mnaish Pandey"
  }

}
