import { Action } from '@ngrx/store';
import { Movie } from './../../shared/models/movie';

export enum MoviesActionTypes {
    LoadMovies = '[Movie] Load Movies',
    LoadMovies_SUCCESS = '[Movie] Load Movies Success',
    LoadMovies_FAIL = '[Movie] Load Movies Fail',
    AddMovie = '[Movie] Add Movie',
    EditMovie = '[Movie] Edit Movie',
    DeleteMovie = '[Movie] Delete Movie'
}

export class LoadMovies implements Action {
    readonly type = MoviesActionTypes.LoadMovies;
}

export class LoadMoviesSuccess implements Action {
    readonly type = MoviesActionTypes.LoadMovies_SUCCESS;

    constructor(public movies: Movie[]) { }
}

export class LoadMoviesFail implements Action {
    readonly type = MoviesActionTypes.LoadMovies_FAIL;

    constructor(public payload: string) { }
}

export class AddMovie implements Action {
    readonly type = MoviesActionTypes.AddMovie;

    constructor(public movie: Movie) {
    }
}

export class EditMovie implements Action {
    readonly type = MoviesActionTypes.EditMovie;

    constructor(public movie: Movie) {
    }
}

export class DeleteMovie implements Action {
    readonly type = MoviesActionTypes.DeleteMovie;

    constructor(public movieId: string) {
    }
}

export type MoviesActions = LoadMovies | LoadMoviesSuccess | LoadMoviesFail | AddMovie | EditMovie | DeleteMovie;
