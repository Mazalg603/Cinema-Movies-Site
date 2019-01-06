import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MovieHelperService } from './../../shared/services/movie-helper.service';
import { AppState } from './../../../core/reducers/index';
import { getMoviesList } from './../../../core/selectors/movies.selectors';
import { Movie } from './../../../shared/models/movie';
import * as MoviesActions from '../../../core/actions/movies.actions';
import { Guid } from './../../../shared/utils/guid';

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
  public errorMessege: any;
  public searchTitle: string;
  public filteGrenres: any[];

  constructor(private store: Store<AppState>, private movieHelper: MovieHelperService) { }

  ngOnInit() {
    this.store.dispatch(new MoviesActions.LoadMovies());
    this.subGetMoviesList = this.store.pipe(select(getMoviesList)).subscribe((movies) => {
      if (movies.length) {
        this.moviesList = movies;
      }
    });

    this.filteGrenres = [
      { value: 'Action', checked: false },
      { value: 'Adventure', checked: false },
      { value: 'Drama', checked: false },
      { value: 'Thriller', checked: false },
      { value: 'Comedy', checked: false },
      { value: 'Documentary', checked: false },
      { value: 'Crime', checked: false },
      { value: 'Horror', checked: false },
      { value: 'Short', checked: false },
      { value: 'Romance', checked: false },
      { value: 'Animation', checked: false },
      { value: 'Sci-Fi', checked: false },
      { value: 'Western', checked: false },
      { value: 'History', checked: false },
      { value: 'War', checked: false }
    ];
    this.errorMessege = this.movieHelper.movieErorrs;
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
    if (this.movieHelper.validateMovie(movie)) {
      if (this.isNewMovie && (this.movieHelper.titleIsExist(this.moviesList, movie.Title) === -1)) {
        movie.imdbID = Guid.generate();
        this.store.dispatch(new MoviesActions.AddMovie(movie));
        this.resetProperties();
      } if (!this.isNewMovie) {
        this.store.dispatch(new MoviesActions.EditMovie(movie));
        this.resetProperties();
      }
    }
  }

  public openDialog() {
    this.formDialogOpne = true;
    this.isNewMovie = true;
    this.movieObj = <Movie>{};
  }

  public checkedGrenres() {
    return this.filteGrenres.filter(grenre => grenre.checked);
  }

  public cancelCheckedGrenres() {
    this.filteGrenres.filter(grenre => grenre.checked = false);
  }

  public resetProperties() {
    this.formDialogOpne = false;
    this.movieObj = <Movie>{};
    this.movieHelper.movieErorrs = this.movieHelper.resetErorrs();
  }

}
