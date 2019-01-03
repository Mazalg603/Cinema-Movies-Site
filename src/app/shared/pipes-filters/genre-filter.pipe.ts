import { Movie } from './../models/movie';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreFilter'
})
export class GenreFilterPipe implements PipeTransform {

  transform(movies: Movie[], genres: any[]): any {
    let filtersMovies: any[] = [];

    if (!genres) {
      return movies;
    }
    if (!movies) {
      return [];
    }

    genres.forEach(genre => {
      if (genre.checked) {
        movies.forEach(movie => {
          const movieGenres = movie.Genre.split(',');
          if (movieGenres.includes(genre.value) && filtersMovies.indexOf(movie) === -1) {
            filtersMovies = [...filtersMovies, movie];
          }
        });
      }
    });

    if (filtersMovies.length) {
      return filtersMovies;
    } else {
      return movies;
    }

  }

}
