import { Pipe, PipeTransform } from '@angular/core';
import { Office } from '../models/user.model';

@Pipe({
  name: 'officepipe'
})
export class OfficePipe implements PipeTransform {

  transform(value: number, of : Office) : string {
    if(of.id == value)
    {
      return of.name;
    }
    else{
      return '';
    }
}

}
