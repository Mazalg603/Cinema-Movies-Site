import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { MoviesState, moviesReducer } from './movie.reducer';

export interface AppState {
    moviesState: MoviesState;
}

export const reducers: ActionReducerMap<AppState> = {
    moviesState: moviesReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
