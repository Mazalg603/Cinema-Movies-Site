import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MoviesService } from '../../../shared/services/movies.service';
import { AppState } from './../../../core/reducers/index';
import { getMoviesList } from './../../../core/selectors/movies.selectors';
import { Movie } from './../../../shared/models/movie';
import * as MoviesActions from '../../../core/actions/movies.actions';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {

  public moviesList: Movie[];
  public isNewMovie = true;
  public movieObj: Movie = <Movie>{};
  private subGetMoviesList: Subscription;
  public formDialogOpne = false;
  public deleteDialogOpne = false;
  public errorMessege: string;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new MoviesActions.LoadMovies());
    this.subGetMoviesList = this.store.pipe(select(getMoviesList)).subscribe((movies) => {
      if (movies.length) {
        this.moviesList = movies;
      }
    });

  }

  ngOnDestroy() {
    if (this.subGetMoviesList) {
      this.subGetMoviesList.unsubscribe();
    }
  }

  public editMovieHendler(movie) {
    this.movieObj = Object.assign({}, movie);
    this.isNewMovie = false;
    this.formDialogOpne = true;
  }

  public deleteMovieHendler(movie) {
    this.movieObj = Object.assign({}, movie);
    this.deleteDialogOpne = true;
  }

  public deleteMovie() {
    this.store.dispatch(new MoviesActions.DeleteMovie(this.movieObj.imdbID));
    this.deleteDialogOpne = false;
  }

  public saveMovieHendler(movie) {
    const index = this.moviesList.find((item) => {
      return item.Title === movie.Title;
    });
    if (!index) {
      if (this.isNewMovie) {
        this.store.dispatch(new MoviesActions.AddMovie(movie));
      } else {
        this.store.dispatch(new MoviesActions.EditMovie(movie));
      }
      this.formDialogOpne = false;
      this.movieObj = <Movie>{};
      this.errorMessege = null;
    } else {
      this.errorMessege = 'Movie title is already exist';
    }
  }

  public openDialog() {
    this.formDialogOpne = true;
    this.movieObj = <Movie>{};
  }

}
