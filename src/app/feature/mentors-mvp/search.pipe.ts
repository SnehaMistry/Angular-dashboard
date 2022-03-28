import { Pipe, PipeTransform } from '@angular/core';
import { Mentors, searchFilter } from './mentors.model';

@Pipe({
  name: 'searchpipe'
})
export class SearchPipe implements PipeTransform {

  transform(mentors: Mentors[], searchString: string) : Mentors[] {
    const properties = Object.keys(mentors[0]);

    return mentors.filter(mentor => {
      return properties.find((property) => {
        const matchString = mentor[property as keyof searchFilter]?.toLowerCase();
        return matchString.startsWith(searchString?.toLowerCase());
      })
      ? mentor
      : null
    });
  }

}
