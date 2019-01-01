import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as TITELS from '../models/titles';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/reducers';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl = 'http://www.omdbapi.com/?apikey=ea22e40a&type=movie&';
  constructor(private store: Store<AppState>, private http: Http) { }

  public getMovies() {
    let movieArray = [];
    TITELS.titles.forEach(title => {
      const movie = this.http.get(this.baseUrl + 't=' + title).pipe(map((res) => res.json()));
      movieArray = [...movieArray, movie];
    });
    return forkJoin(movieArray);
  }


  public getMoviesList() {
    return this.getMovies().subscribe(data => {
      return data.map(res => {
        if (res['imdbID'] !== undefined && res['Response'] !== 'False') {
          const { imdbID, Title, Year, Runtime, Genre, Director } = res as any;
          return { imdbID, Title, Year, Runtime, Genre, Director };
        }
      });
    });
  }

}
