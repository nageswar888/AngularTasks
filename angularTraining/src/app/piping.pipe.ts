import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piping'
})
export class PipingPipe implements PipeTransform {


  transform(value: string): any {
      if(value){
        if(value.length>5)
          return value.slice(0,4)+'...';
        else
          return value;
      }


    }

}
