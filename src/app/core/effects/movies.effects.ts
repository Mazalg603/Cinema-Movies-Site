import { Injectable, Pipe } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AppState } from './../reducers/index';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { Movie } from './../../shared/models/movie';
import * as MoviesActions from './../../core/actions/movies.actions';

@Injectable()
export class MoviesEffects {

    constructor(private moviesService: MoviesService, private actions$: Actions, private store: Store<AppState>) { }

    @Effect()
    loadMovies$: Observable<Action> = this.actions$.pipe(
        ofType<MoviesActions.LoadMovies>(
            MoviesActions.MoviesActionTypes.LoadMovies
        ),
        mergeMap((action: MoviesActions.LoadMovies) =>
            this.moviesService.getMovies().pipe(
                map((movies: Movie[]) => new MoviesActions.LoadMoviesSuccess(movies.map(res => {
                    if (res['imdbID'] !== undefined && res['Response'] !== 'False') {
                        const { imdbID, Title, Year, Runtime, Genre, Director, Plot, Poster } = res as any;
                        // Genre = Genre.split(',');
                      return { imdbID, Title, Year, Runtime, Genre, Director, Plot, Poster };
                    }
                  }))),
                catchError(err => of(new MoviesActions.LoadMoviesFail(err)))
            )
        )
    );
}
