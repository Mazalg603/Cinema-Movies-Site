import { Movie } from './../models/movie';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlesSearch'
})
export class SearchPipe implements PipeTransform {

  transform(movies?: Movie[], value?: any): any {
    if (!value) {
      return movies;
    }
    if (!movies) {
      return [];
    }

    value = value.toLocaleLowerCase();

    return movies.filter((movie) => {
      return movie.Title.toLocaleLowerCase().includes(value);
    });
  }

}
