import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../models/user.model';

@Pipe({
  name: 'clientpipe'
})
export class ClientPipe implements PipeTransform {

  transform(value: number, client : Client) : string {

    if(client.id == value)
    {
      console.log(value);
      return client.name;
    }
    else{
      return '';
    }
  }
}
