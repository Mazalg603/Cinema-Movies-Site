import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieHelperService {

  public movieErorrs = {
    title: '',
    year: '',
    runtime: '',
    genre: '',
    director: ''
  };

  constructor() { }

  public validateMovie(movie): boolean {
    return this.yearIsValid(movie.Year) &&
      movie.Title !== null &&
      this.runtimeIsValid(movie.Runtime) &&
      movie.Genre !== null &&
      movie.Director !== null;
  }

  private yearIsValid(year): boolean {
    const _thisYear = new Date().getFullYear() + 1;
    const text = /^[0-9]+$/;
    if ((year !== '') && (!text.test(year))) {
      this.movieErorrs.year = 'Specified year is incorrect';
      return false;
    }
    if (year.length !== 4) {
      this.movieErorrs.year = 'Movie year must be minimum 4 numbers';
      return false;
    }
    if (Number(year) > _thisYear || Number(year) < 1900) {
      this.movieErorrs.year = `Year must be between 1900 - ${_thisYear}`;
      return false;
    }
    return true;
  }

  public titleIsExist(moviesList, title): number {
    const index = moviesList.findIndex((item) => {
      return item.Title === title;
    });
    if (index > -1) {
      this.movieErorrs.title = 'This movie title already exist';
    }
    return index;
  }

  private runtimeIsValid(runtime): boolean {
    return true;
  }

  public resetErorrs() {
    return {
      title: '',
      year: '',
      runtime: '',
      genre: '',
      director: ''
    };
  }

}
