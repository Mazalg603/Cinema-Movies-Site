import {createSelector} from '@ngrx/store';
import {AppState} from '../reducers';
import {MoviesState} from '../reducers/movie.reducer';


export const getMovieState = (state: AppState) => state.moviesState;
export const getMoviesList = createSelector(getMovieState, (state: MoviesState) => state.movies);
