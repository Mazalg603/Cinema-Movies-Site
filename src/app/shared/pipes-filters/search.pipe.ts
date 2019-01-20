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

    const searchResult = movies.filter((movie) => {
      return movie.Title.toLocaleLowerCase().includes(value);
    });

    return searchResult.length > 0 ? searchResult : movies;
  }

}
